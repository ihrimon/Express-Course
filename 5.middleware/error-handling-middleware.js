const express = require('express');
const app = express();

// craete route for trigger an error
app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 500;
  next(error); // Pass the error to the error handler
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack, 
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
