const express = require('express');
const Unblocker = require('unblocker');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(Unblocker({ prefix: '/tools/' }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Homework Tools</h1>
    <form method="GET" action="/tools/">
      <input name="url" placeholder="https://example.com" style="width:300px;">
      <button type="submit">Go</button>
    </form>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy running');
});
