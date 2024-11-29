const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Date/Time: ${new Date(Date.now()).toLocaleString()}`);
  next();
});

router.use('/user/:id', (req, res, next) => {
  console.log(`URL:, ${req.originalUrl} Type: ${req.method}`);
  next();
});

router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('Id is equal to zero');
  else next();
});
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id);
  res.send({ success: true });
});

app.use('/', router);

app.listen(3000, () => {
  console.log(`Server is running on port at ${3000}`);
});
