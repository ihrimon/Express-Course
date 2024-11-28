const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(a)
});

// 404 error handling
app.use((req, res, next) => {
    next('Request url was not found!')
})

// invisible defautl error handling middleware as last middleware
app.use((err, req, res, next) => {
    if(err.message) {
        res.status(500).send(err.message);
    }else {
        res.status(500).send('There was an error!')
    }
})

app.listen(3000, () => {
    console.log(`Server is running on port at ${3000}`)
})

/** status 404 is not an error. this error from user */


/** RULE: response er header ekta client e multiple time send kora jai nah */