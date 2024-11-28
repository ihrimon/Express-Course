const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
