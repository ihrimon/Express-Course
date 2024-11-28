const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next(); // Pass control to the next middleware
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => console.log('Server running on port 3000'));
