const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  setTimeout(function () {
    try {
      console.log(a)
    } catch (error) {
      res.send(error.message)
    }
  }, 100)
});

// custom error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
      next('There was a problem!');
    } else {
      if (err.message) {
        res.status(500).send(err.message);
      } else {
        res.send('There was an error!');
      }
    }
})

app.listen(3000, () => {
  console.log(`Server is running on port at ${3000}`);
});

/**
 * sync code er error express default handle kore
 */