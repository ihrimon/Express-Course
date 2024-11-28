const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  console.log(req.route)
  res.send('get method route');
});

app.post('/', (req, res) => {
  console.log(req.route)
  res.send('post method route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
