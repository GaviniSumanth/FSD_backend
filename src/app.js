const express = require('express')
const user = require('./routes/user')
const video = require('./routes/Video')
const app = express()
app.use('/user/', user)
app.use('/', user)
app.use('/Video/', video)
module.exports = app
