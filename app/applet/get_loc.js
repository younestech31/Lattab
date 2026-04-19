const http = require('https');
http.get('https://maps.app.goo.gl/NwPD6ik2evPreyCc7', (res) => {
  console.log(res.headers.location);
});
