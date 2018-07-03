const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; 

var app = express();
var dbString = 'mongodb://charithw:cbacharith2@ds125341.mlab.com:25341/quotes-db';
var db;

app.set('view engine', hbs);
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbString, (error, client)=>{
    if(error){
        console.log(error);
    }
    db = client.db('quotes-db');
    app.listen('5000', ()=>{
        console.log('server is up on port 5000');
    });
});

app.get('/',(req, res)=>{
    res.render('form.hbs');
});

app.post('/quotes',(req, res)=>{
   
    db.collection('quotes').save(req.body, (error, result) => {
        if(error){
            console.log(error);
        }
        console.log('saved to database')
        res.redirect('/')
    });
});






