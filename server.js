'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./src/errorHandlers/500')
const noRouteError = require('./src/errorHandlers/404')
const PORT = process.env.PORT || 3232

app.get('/info', (req, res) => {
    res.status(200).send('Welcome to AWS Elastic Bean')
})

app.get('/coolstuff', (req, res) => {
    res.status(418).send("I'm a teapot. You found me!")
})

app.use('*', noRouteError)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server up on ${PORT}`)
})