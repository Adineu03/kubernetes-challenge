const express = require('express');
const port = 4000;
const app = express();

app.listen(port);

console.log(`Server running at http://localhost: ${port}`);

app.get('/', (req, res) => {
  const process_name = JSON.stringify(process);
  res.send(process_name);
  const name = process.env.NAME || 'guest';
  res.send(`Hello ${name}!`);
});
