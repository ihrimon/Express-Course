const express = require('express');
const app = express();

const router = express.Router({
  caseSensitive: true,
});

app.use(router);

app.get('/about', (req, res) => {
  res.send('This is home page');
});

app.listen(5000, () => {
  console.log(`server is running on port at 5000`);
});
