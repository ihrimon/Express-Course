const express = require('express');
const app = express();


app.all('/', (req, res)=> {
    res.send('app.all using for all reqest method');
})

app.listen(3000, ()=> {
    console.log(`server is running on port at 3000`);
})