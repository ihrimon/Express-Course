const express = require('express');
const app = express();

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
  console.log(req.baseUrl);
  res.send('Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  res.send('Home route');
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
