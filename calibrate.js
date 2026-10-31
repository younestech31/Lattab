const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');

async function calibrate() {
  const bytes = fs.readFileSync('public/forms/gn17.pdf');
  const pdfDoc = await PDFDocument.load(bytes);
  const page1 = pdfDoc.getPage(0);
  
  // Draw horizontal calibration lines at 20-point intervals to identify Y-lines
  for (let y = 0; y < 842; y += 20) {
    page1.drawLine({
      start: { x: 0, y: y },
      end: { x: 595, y: y },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
    // Add text label
    page1.drawText(`${y}`, {
      x: 5,
      y: y,
      size: 6,
      color: rgb(0.8, 0.8, 0.8),
    });
  }

  const out = await pdfDoc.save();
  fs.writeFileSync('gn17_calibration_grid.pdf', out);
  console.log('Grid saved to gn17_calibration_grid.pdf');
}

calibrate().catch(console.error);
