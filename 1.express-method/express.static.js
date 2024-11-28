const express = require('express');
const app = express();
const path = require('path');

// Serve static files with 'home.html' as the default index
// app.use(express.static(path.join(__dirname, 'public'), {
//   index: 'home.html'
// }));

app.use(express.static('public', {
  dotfiles: 'ignore',
  etag: false,
  index: 'home.html',
  maxAge: '1d' // Cache for one day
}));
// Fallback route for '/'
app.get('/', (req, res) => {
  // If no static file is served, this will handle the request
  res.send('This is the home page');
});

// POST route for '/'
app.post('/', (req, res) => {
  res.send('Home page with POST request');
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});