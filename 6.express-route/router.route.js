const express = require('express');
const app = express();
const publicRouter = express.Router();

app.use('/', publicRouter);

publicRouter
  .route('/user')
  .all((req, res, next) => {
    console.log('I am loggin something');
    next();
  })
  .get((req, res) => {
    res.send('GET route');
  })
  .post((req, res) => {
    res.send('POST route');
  })
  .put((req, res) => {
    res.send('PUT route');
  })
  .delete((req, res) => {
    res.send('DELETE route');
  });

app.listen(3000, () => {
  console.log(`server is running on port at ${3000}`);
});
