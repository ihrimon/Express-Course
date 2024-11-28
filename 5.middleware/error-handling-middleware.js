const express = require('express');
const app = express();

// Normal middleware
app.get('/', (req, res) => {
  throw new Error('Something went wrong!'); // Force an error
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => console.log('Server running on port 3000'));
