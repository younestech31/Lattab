const https = require('https');
const fs = require('fs');
const dir = 'public';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
const file = fs.createWriteStream('public/og-image.jpg');
https.get('https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png', (res) => {
    res.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download Completed');
    });
});
