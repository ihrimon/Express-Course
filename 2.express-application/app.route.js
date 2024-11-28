const express = require('express');
const app = express();

app.route('/api/testing')
  .get((req, res) => {
    res.send('GET method triggered');
  })
  .post((req, res) => {
    res.send('POST method triggered');
  })
  .put((req, res) => {
    res.send('PUT method triggered');
  })
  .patch((req, res) => {
    res.send('PATCH method triggered');
  })
  .delete((req, res) => {
    res.send('DELETE method triggered');
  });

app.listen(3000, () => {
  console.log(`Server in running on port at ${3000}`);
});
