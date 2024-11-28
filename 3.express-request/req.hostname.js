const express = require('express');
const app = express();

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
  console.log(req.hostname);
  res.send('Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  console.log(req.hostname)
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});

/* app.path er moddhe query parameter guli thake nah. */