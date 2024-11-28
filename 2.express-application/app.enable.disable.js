const express = require('express');
const app = express();

app.enable('case sensitive routing');
app.disable('case sensitive routing');

app.all('/about', (req, res)=> {
    res.send('Case sensitive routing');
})

app.listen(3000, ()=> {
    console.log(`server is running on port at 3000`);
})