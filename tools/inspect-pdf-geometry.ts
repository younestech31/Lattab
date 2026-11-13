import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import fs from 'node:fs';
import path from 'node:path';

interface RectBox {
  x: number;
  y: number;
  w: number;
  h: number;
  paint: string;
}

interface TextRun {
  str: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

type Matrix = [number, number, number, number, number, number];

function mulMatrix(m1: Matrix, m2: Matrix): Matrix {
  return [
    m1[0] * m2[0] + m1[1] * m2[2],
    m1[0] * m2[1] + m1[1] * m2[3],
    m1[2] * m2[0] + m1[3] * m2[2],
    m1[2] * m2[1] + m1[3] * m2[3],
    m1[4] * m2[0] + m1[5] * m2[2] + m2[4],
    m1[4] * m2[1] + m1[5] * m2[3] + m2[5],
  ];
}

function applyMatrix(m: Matrix, x: number, y: number): [number, number] {
  return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
}

export async function extractPageGeometry(pdfPath: string, pageNum: number) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data, verbosity: 0 }).promise;
  const page = await doc.getPage(pageNum);
  const viewport = page.getViewport({ scale: 1 });
  const textContent = await page.getTextContent();
  const ops = await page.getOperatorList();

  const textRuns: TextRun[] = [];
  for (const item of textContent.items) {
    if ('str' in item && item.str.trim().length > 0) {
      textRuns.push({
        str: item.str,
        x: Number(item.transform[4].toFixed(2)),
        y: Number(item.transform[5].toFixed(2)),
        w: Number(item.width.toFixed(2)),
        h: Number((item.height || Math.abs(item.transform[3])).toFixed(2)),
      });
    }
  }

  const rects: RectBox[] = [];
  let ctm: Matrix = [1, 0, 0, 1, 0, 0];
  const stack: Matrix[] = [];

  for (let i = 0; i < ops.fnArray.length; i++) {
    const fn = ops.fnArray[i];
    const args = ops.argsArray[i];
    if (fn === pdfjs.OPS.save) {
      stack.push([...ctm]);
    } else if (fn === pdfjs.OPS.restore) {
      ctm = stack.pop() || [1, 0, 0, 1, 0, 0];
    } else if (fn === pdfjs.OPS.transform) {
      ctm = mulMatrix(args as Matrix, ctm);
    } else if (fn === pdfjs.OPS.constructPath) {
      const paintOp = args[0] as number;
      // Skip clip paths
      if (paintOp === pdfjs.OPS.clip || paintOp === pdfjs.OPS.eoClip) continue;
      const paintName =
        paintOp === pdfjs.OPS.stroke || paintOp === pdfjs.OPS.closeStroke
          ? 'stroke'
          : paintOp === pdfjs.OPS.fill || paintOp === pdfjs.OPS.eoFill
          ? 'fill'
          : 'fillStroke';

      const pathData = args[1]?.[0] as Float32Array | Record<string, number> | undefined;
      if (!pathData) continue;
      const arr = Array.isArray(pathData)
        ? pathData
        : ArrayBuffer.isView(pathData)
        ? Array.from(pathData as Float32Array)
        : Object.keys(pathData)
            .sort((a, b) => Number(a) - Number(b))
            .map((k) => (pathData as Record<string, number>)[k]);

      let idx = 0;
      const pts: Array<[number, number]> = [];
      let subStart = 0;
      const flushSubpath = () => {
        if (pts.length >= 2) {
          let minX = Infinity,
            minY = Infinity,
            maxX = -Infinity,
            maxY = -Infinity;
          for (const [px, py] of pts) {
            if (px < minX) minX = px;
            if (py < minY) minY = py;
            if (px > maxX) maxX = px;
            if (py > maxY) maxY = py;
          }
          const w = maxX - minX;
          const h = maxY - minY;
          if (w < 590 && h < 830 && (w > 1 || h > 1)) {
            rects.push({
              x: Number(minX.toFixed(2)),
              y: Number(minY.toFixed(2)),
              w: Number(w.toFixed(2)),
              h: Number(h.toFixed(2)),
              paint: paintName,
            });
          }
        }
        pts.length = 0;
        subStart++;
      };

      while (idx < arr.length) {
        const cmd = arr[idx++];
        if (cmd === 0) {
          // moveTo
          if (pts.length > 0) flushSubpath();
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 1) {
          // lineTo
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 2) {
          // curveTo
          idx += 4;
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 3) {
          // curveTo2/3
          idx += 2;
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 4) {
          // closePath
          flushSubpath();
        } else {
          break;
        }
      }
      if (pts.length > 0) flushSubpath();
    }
  }

  return { width: viewport.width, height: viewport.height, textRuns, rects };
}

async function cli() {
  const target = process.argv[2];
  const pageNum = Number(process.argv[3] || '1');
  if (!target) {
    console.error('Usage: tsx tools/inspect-pdf-geometry.ts <pdf-path> <page-num>');
    process.exit(1);
  }
  const geom = await extractPageGeometry(path.resolve(target), pageNum);
  console.log(`=== ${target} Page ${pageNum} (${geom.width.toFixed(2)} x ${geom.height.toFixed(2)} pt) ===`);

  // Find candidate digit-box clusters and checkboxes
  const smallBoxes = geom.rects.filter((r) => r.w >= 5 && r.w <= 22 && r.h >= 5 && r.h <= 22);
  console.log(`\n--- Small boxes (5..22 pt) count: ${smallBoxes.length} ---`);
  const byRow = new Map<number, RectBox[]>();
  for (const b of smallBoxes) {
    const rowKey = Math.round(b.y / 2) * 2;
    if (!byRow.has(rowKey)) byRow.set(rowKey, []);
    byRow.get(rowKey)!.push(b);
  }
  for (const [yKey, rowBoxes] of [...byRow.entries()].sort((a, b) => b[0] - a[0])) {
    const sorted = [...rowBoxes].sort((a, b) => a.x - b.x);
    // Deduplicate overlapping fill/stroke at same coords
    const uniq: RectBox[] = [];
    for (const box of sorted) {
      const last = uniq[uniq.length - 1];
      if (!last || Math.abs(last.x - box.x) > 1.5 || Math.abs(last.w - box.w) > 1.5) {
        uniq.push(box);
      }
    }
    if (uniq.length >= 1) {
      const first = uniq[0];
      const last = uniq[uniq.length - 1];
      const step = uniq.length > 1 ? ((last.x - first.x) / (uniq.length - 1)).toFixed(2) : '-';
      console.log(
        `  y≈${first.y} h=${first.h} | count=${uniq.length} | x0=${first.x} .. xN=${last.x} | w=${first.w} | step=${step} | [${uniq.slice(0, 5).map(u => `${u.x}(${u.w})`).join(', ')}${uniq.length > 5 ? ', ...' : ''}]`
      );
    }
  }

  // Group text runs by visual line (y within 3pt)
  console.log(`\n--- Text Runs (grouped by y descending) ---`);
  const lines = new Map<number, TextRun[]>();
  for (const t of geom.textRuns) {
    let foundKey: number | null = null;
    for (const k of lines.keys()) {
      if (Math.abs(k - t.y) <= 2.5) {
        foundKey = k;
        break;
      }
    }
    const key = foundKey ?? t.y;
    if (!lines.has(key)) lines.set(key, []);
    lines.get(key)!.push(t);
  }
  for (const [yVal, items] of [...lines.entries()].sort((a, b) => b[0] - a[0])) {
    items.sort((a, b) => a.x - b.x);
    const summary = items
      .map((it) => `[x:${it.x}..${(it.x + it.w).toFixed(1)} y:${it.y} "${it.str}"]`)
      .join(' ');
    console.log(`  Y=${yVal.toFixed(1)}: ${summary}`);
  }
}

cli().catch((e) => {
  console.error(e);
  process.exit(1);
});
