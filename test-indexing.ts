fetch('http://localhost:3000/api/google-indexing', { method: 'GET' })
  .then(res => res.json().then(data => ({ status: res.status, data })))
  .then(console.log)
  .catch(console.error);

fetch('http://localhost:3000/api/google-indexing', { method: 'PUT' })
  .then(res => res.json().then(data => ({ status: res.status, data })))
  .then(console.log)
  .catch(console.error);
