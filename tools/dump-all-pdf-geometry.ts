import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import fs from 'node:fs';
import path from 'node:path';

interface PrimRect {
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

export async function analyzePdfPage(pdfPath: string, pageNum: number) {
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

  const prims: PrimRect[] = [];
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
          if (w < 594 && h < 840 && (w > 0.2 || h > 0.2)) {
            prims.push({
              x: Number(minX.toFixed(2)),
              y: Number(minY.toFixed(2)),
              w: Number(w.toFixed(2)),
              h: Number(h.toFixed(2)),
              paint: paintName,
            });
          }
        }
        pts.length = 0;
      };

      while (idx < arr.length) {
        const cmd = arr[idx++];
        if (cmd === 0) {
          if (pts.length > 0) flushSubpath();
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 1) {
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 2) {
          idx += 4;
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 3) {
          idx += 2;
          const [tx, ty] = applyMatrix(ctm, arr[idx++], arr[idx++]);
          pts.push([tx, ty]);
        } else if (cmd === 4) {
          flushSubpath();
        } else {
          break;
        }
      }
      if (pts.length > 0) flushSubpath();
    }
  }

  // Classify primitives:
  // 1. Vertical bars (dividers): w <= 2.5, h >= 6 && h <= 35
  const vDividers = prims.filter((p) => p.w <= 2.5 && p.h >= 6 && p.h <= 35);
  // Group vertical dividers by similar y & h (within 2pt)
  const vClusters: Array<{ y: number; h: number; xs: number[] }> = [];
  for (const v of vDividers) {
    let cluster = vClusters.find((c) => Math.abs(c.y - v.y) <= 2 && Math.abs(c.h - v.h) <= 3);
    if (!cluster) {
      cluster = { y: v.y, h: v.h, xs: [] };
      vClusters.push(cluster);
    }
    if (!cluster.xs.some((existing) => Math.abs(existing - v.x) <= 1.2)) {
      cluster.xs.push(v.x);
    }
  }
  for (const c of vClusters) c.xs.sort((a, b) => a - b);

  // 2. Horizontal lines (underlines / table rows): h <= 2.5 && w >= 12
  const hLines = prims.filter((p) => p.h <= 2.5 && p.w >= 12);

  // 3. Explicit boxes (checkboxes / digit rectangles): 6 <= w <= 28 && 6 <= h <= 28
  const boxes = prims.filter((p) => p.w >= 6 && p.w <= 28 && p.h >= 6 && p.h <= 28);
  const uniqBoxes: PrimRect[] = [];
  for (const b of boxes) {
    if (!uniqBoxes.some((u) => Math.abs(u.x - b.x) <= 1 && Math.abs(u.y - b.y) <= 1 && Math.abs(u.w - b.w) <= 1)) {
      uniqBoxes.push(b);
    }
  }

  return {
    width: viewport.width,
    height: viewport.height,
    textRuns,
    vClusters: vClusters.filter((c) => c.xs.length >= 2).sort((a, b) => b.y - a.y),
    hLines: hLines.sort((a, b) => b.y - a.y),
    boxes: uniqBoxes.sort((a, b) => b.y - a.y || a.x - b.x),
  };
}

async function main() {
  const outDir = path.resolve(process.cwd(), 'artifacts', 'pdf-geometry');
  fs.mkdirSync(outDir, { recursive: true });

  const files = ['gn17.pdf', 'gn17_fr.pdf', 'gn31.pdf', 'gn31_fr.pdf', 'gn8.pdf', 'gn8_fr.pdf', 'gn51.pdf', 'gn51_fr.pdf'];

  for (const file of files) {
    const pdfPath = path.resolve(process.cwd(), 'public', 'forms', file);
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const doc = await pdfjs.getDocument({ data, verbosity: 0 }).promise;
    const outLines: string[] = [];

    for (let p = 1; p <= doc.numPages; p++) {
      const g = await analyzePdfPage(pdfPath, p);
      outLines.push(`============================================================`);
      outLines.push(`${file} — PAGE ${p} (${g.width.toFixed(2)} x ${g.height.toFixed(2)} pt)`);
      outLines.push(`============================================================`);

      outLines.push(`\n[1] VERTICAL DIVIDER CLUSTERS (Grids & Checkboxes):`);
      for (const c of g.vClusters) {
        const gaps: number[] = [];
        for (let k = 1; k < c.xs.length; k++) gaps.push(Number((c.xs[k] - c.xs[k - 1]).toFixed(2)));
        outLines.push(`  y=${c.y.toFixed(2)} h=${c.h.toFixed(2)} (${c.xs.length} bars): xs=[${c.xs.join(', ')}] gaps=[${gaps.slice(0, 10).join(', ')}${gaps.length > 10 ? ', ...' : ''}]`);
      }

      outLines.push(`\n[2] EXPLICIT SMALL BOXES (6..28 pt):`);
      for (const b of g.boxes) {
        outLines.push(`  x=${b.x.toFixed(2)} y=${b.y.toFixed(2)} w=${b.w.toFixed(2)} h=${b.h.toFixed(2)} (${b.paint})`);
      }

      outLines.push(`\n[3] HORIZONTAL LINES (h <= 2.5, w >= 12):`);
      for (const h of g.hLines) {
        outLines.push(`  y=${h.y.toFixed(2)} x=${h.x.toFixed(2)}..${(h.x + h.w).toFixed(2)} (w=${h.w.toFixed(2)}, h=${h.h.toFixed(2)})`);
      }

      outLines.push(`\n[4] TEXT LINES (top to bottom):`);
      const lines = new Map<number, TextRun[]>();
      for (const t of g.textRuns) {
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
        const summary = items.map((it) => `[${it.x.toFixed(1)}..${(it.x + it.w).toFixed(1)} y:${it.y.toFixed(1)} "${it.str}"]`).join(' ');
        outLines.push(`  Y=${yVal.toFixed(1)}: ${summary}`);
      }
      outLines.push('');
    }

    const outPath = path.join(outDir, `${file.replace('.pdf', '')}.geometry.txt`);
    fs.writeFileSync(outPath, outLines.join('\n'), 'utf8');
    console.log(`Wrote ${outPath} (${outLines.length} lines)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
