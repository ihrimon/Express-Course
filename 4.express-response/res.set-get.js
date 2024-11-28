const express = require('express');
const app = express();


app.get('/test', (req, res) => {
    res.set('name', 'Imam Hasasn Rimon');
    console.log(res.get('name'));
    res.end();
})

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
