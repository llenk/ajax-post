//put consts and requires on top
const express = require('express');
const app = express();
const PORT  = 5000;

//this will live in the database eventually
const records = require('./modules/record-collection');

//then static files
app.use(express.static('server/public'));

//routes (get, post, put delete requests)
//when we have a ton, we'll put them in modules
app.get('/records', function(req, res) {
    res.send(records);
});

app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});

