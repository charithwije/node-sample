const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; 

var app = express();

app.set('view engine', hbs);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req, res)=>{
    res.render('form.hbs');
});

app.post('/quotes',(req, res)=>{
    console.log(req.body);
    res.sendStatus(200);
});


app.listen('5000', ()=>{
    console.log('server is up on port 5000');
})