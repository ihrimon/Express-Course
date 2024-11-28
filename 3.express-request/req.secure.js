const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  console.log(req.secure)
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
