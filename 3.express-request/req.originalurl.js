const express = require('express');
const app = express();

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
  console.log(req.originalUrl);
  res.send('Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  console.log(req.originalUrl)
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});

/* originalurl and url same url dibe jodi na sub app create kora hoi. sub app er khetre req.url just sup app er url dei. ar original url full url ta provide kore. */
