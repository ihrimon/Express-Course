const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// parse cookies
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'Rimon');
  res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
  const user = req.cookies.user;
  res.send(`User cookie: ${user}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
