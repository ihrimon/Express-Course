const express = require('express');
const app = express();
const user = express()
const admin = express()

app.use('/user', user)
user.use('/admin', admin)

console.dir(app.path()) // ''
console.dir(user.path()) // '/user'
console.dir(admin.path()) // '/user/admin'
