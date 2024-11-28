const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.get('/user', (req, res) => {
  console.log(req.cookies)
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});

/**
 * 1. singed cookies
 * 2. unsigned cookies
 */