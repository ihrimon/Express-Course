const express = require('express');
const app = express();

app.locals.title = 'My App';

app.get('/', (req, res) => {
  console.log(app.locals.title);
  res.send('This is home page');
});

app.listen(3000, () => {
  console.log(`server is running on port at 3000`);
});
/* app.locals er maddhome full application er access pawa jai */
