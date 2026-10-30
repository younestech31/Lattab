const fs = require('fs');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

async function testFill() {
  const templateBytes = fs.readFileSync('public/forms/gn17.pdf');
  const fontBytes = fs.readFileSync('public/fonts/Amiri-Regular.ttf');

  const pdfDoc = await PDFDocument.load(templateBytes);
  pdfDoc.registerFontkit(fontkit);

  const amiriFont = await pdfDoc.embedFont(fontBytes);
  const standardFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const page1 = pdfDoc.getPage(0);

  // Test field 1: cedantNomPrenom ("محمد لعطب")
  // box: x=120, y=530, maxWidth=350
  const text1 = 'محمد لعطب';
  const size1 = 10;
  const maxWidth1 = 350;
  const width1 = amiriFont.widthOfTextAtSize(text1, size1);
  const drawX1 = 120 + maxWidth1 - width1;

  page1.drawText(text1, {
    x: drawX1,
    y: 530,
    size: size1,
    font: amiriFont,
    color: rgb(0.05, 0.15, 0.35)
  });

  // Test field 2: commune ("وهران")
  // box: x=380, y=199, maxWidth=120
  const text2 = 'وهران';
  const size2 = 9;
  const maxWidth2 = 120;
  const width2 = amiriFont.widthOfTextAtSize(text2, size2);
  const drawX2 = 380 + maxWidth2 - width2;

  page1.drawText(text2, {
    x: drawX2,
    y: 199,
    size: size2,
    font: amiriFont,
    color: rgb(0.05, 0.15, 0.35)
  });

  // Test field 3: montantCession on page 2 (1000000)
  const page2 = pdfDoc.getPage(1);
  const text3 = '1 000 000';
  page2.drawText(text3, {
    x: 80,
    y: 773,
    size: 9,
    font: standardFont,
    color: rgb(0.05, 0.15, 0.35)
  });

  const outBytes = await pdfDoc.save();
  fs.writeFileSync('gn17_filled_test.pdf', outBytes);
  console.log('Successfully saved gn17_filled_test.pdf, size:', outBytes.length);
}

testFill().catch(console.error);
