const express = require('express');
const app = express();

app.get('/', (req, res) => {
  for(let i = 0; i<= 10; i++) {
    if(i === 5) {
        next('i value is equal to 5')
    } else {
        res.write('rimon ');
    }
  }
  res.end();
});

// 404 error handling
app.use((req, res, next) => {
  next('Request url was not found!');
});
app.use((err, req, res, next) => {
  if(res.headersSent) {
    next('There was a problem!');
  }
  else {
    if(err.message) {
        res.status(500).send(err.message);
    } else {
        res.send('There was an error!')
    }
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port at ${3000}`);
});

// invisible default error handler

/**
app.use((err, req, res, next) => {
    //handle error here
})
 */