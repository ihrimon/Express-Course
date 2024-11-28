/**
 * Middleware is functions that have access to req and res object and next function
 * types of middleware:
 *  1. application level middlware
 *  2. router level middleware
 *  3. error handling middleware
 *  4. built-in middleware
 *  5. third-party middleware
 */

const express = require('express');
const app = express();

const logger = (req, res, next) => {
  console.log(
    `Date/Time: ${new Date(Date.now()).toLocaleString()}\nMethod: ${
      req.method
    }\nUrl: ${req.originalUrl}\nProtocol: ${req.protocol}`
  );
  next();
};

app.use(logger);

app.get('/test', (req, res) => {
  res.send('Testing middleware');
});

app.listen(3000, () => {
  console.log(`server is running on port at ${3000}`);
});
