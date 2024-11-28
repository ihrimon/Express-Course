const express = require('express');
const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    res.send('Public router Home');
})

publicRouter.get('/about', (req, res) => {
    res.send('about router for public')
})

module.exports = publicRouter;

