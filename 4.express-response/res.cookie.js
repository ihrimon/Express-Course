const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.cookie('name', 'cookies testing', {
    httpOnly: true,
    secure: false,
  });
  res.end();
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
