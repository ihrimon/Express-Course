const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('response with plain text');
    },
    'text/html': () => {
      res.render('pages/home', {
        message: 'From Express World',
      });
    },
    'application/json': () => {
      res.json({
        message: 'response with json formate',
      });
    },
    default: () => {
      res.status(406).send('Not acceptalbe');
    },
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
