const express = require('express');
const app = express();

app.param('id', (req, res, next, id) => {
  const user = {
    userId: id,
    name: 'Rimon',
  };
  req.userDetails = user;
  next();
});

app.get('/user/:id', (req, res) => {
  console.log(req.userDetails.userId);
  res.send({ succss: true });
});

app.listen(3000, () => {
  console.log(`server is running on port at ${3000}`);
});
