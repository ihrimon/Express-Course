const express = require('express');
const app = express();

// Middleware to add a custom method to the req object
app.use((req, res, next) => {
  req.getUserAgent = function () {
    return req.headers['user-agent'];
  };
  next();
});

app.get('/', (req, res) => {
  res.send(`Your User-Agent is: ${req.getUserAgent()}`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
