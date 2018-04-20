//put consts and requires on top
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT  = 5000;

//this will live in the database eventually
const records = require('./modules/record-collection');

//then static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true})); //makes req.body a thing

//routes (get, post, put delete requests)
//when we have a ton, we'll put them in modules
app.get('/records', (req, res) => {
    res.send(records);
});

app.post('/add-record', function(req, res) {
    console.log(req.body); //data on client side is req.body on server
    records.push(req.body);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});

