const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  const error = new Error('Something went wrong!');
  next(error); // Pass the error to the error-handling middleware
});

// 404 error handle
app.use((req, res, next) => {
  const error = new Error('Request url was not found!');
  error.status = 404;
  next(error);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port at ${3000}`);
});

