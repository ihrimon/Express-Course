const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('This is home page');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Home page with post request');
});

app.listen(5000, () => {
  console.log(`server is running on port at 5000`);
});