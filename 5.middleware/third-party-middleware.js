const express = require('express');
const morgan = require('morgan');
const app = express();

// Third-party middleware
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
