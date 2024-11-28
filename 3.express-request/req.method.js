const express = require('express');
const app = express();


app.get('/user/:id', (req, res) => {
  console.log(req.method)
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
