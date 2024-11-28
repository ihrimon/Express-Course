const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('Hello testing')
});

app.get('/user', (req, res) => {
    res.redirect('/test');
    res.end();
})

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
