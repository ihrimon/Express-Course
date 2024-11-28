const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req.protocol)
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});

/* app.path er moddhe query parameter guli thake nah. */