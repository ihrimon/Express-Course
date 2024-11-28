const express = require('express');
const app = express();

app.set('title', 'My site');
console.log(app.get('title'));

app.listen(3000, () => {
  console.log(`server is running on port at 3000`);
});
