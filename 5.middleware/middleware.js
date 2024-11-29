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
