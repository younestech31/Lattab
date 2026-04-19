const http = require('http');

http.get('http://localhost:3000/terms-privacy', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const h1s = data.match(/<h1[^>]*>.*?<\/h1>/gs);
    console.log('H1s on Terms Page:');
    if (h1s) {
       h1s.forEach((h, i) => console.log(i + ':', h.substring(0, 100).replace(/\n/g, ' ')));
    } else {
       console.log('None');
    }
  });
}).on('error', (e) => {
  console.log("Error fetching:", e);
});
