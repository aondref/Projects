const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/post', function (req, res) {
    res.send('Got a POST request');
})

app.put('/put', function (req, res) {
    res.send('Got a PUT request at /user');
})

app.delete('/delete', function (req, res) {
    res.send('Got a DELETE request at /user');
})

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section...');
    next();
})