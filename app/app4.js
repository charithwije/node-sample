const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; 
const path = require('path');

var app = express();
var dbString = 'mongodb://charithw:cbacharith2@ds125341.mlab.com:25341/quotes-db';
var db;

console.log('*****',__dirname);

app.set('view engine', hbs);
app.use(bodyParser.urlencoded({ extended: true }));
var relPath = path.resolve('./front-end/E-shop/dist/E-shop');
app.use(express.static(relPath));
// app.use(express.static('C:/Users/CharithWijenayake/Desktop/Samples/node-example/front-end/E-shop/dist/E-shop'));
// app.use(express.static(__dirname + '/COT'));

MongoClient.connect(dbString, (error, client) => {
    if(error){
        console.log(error);
    }
    db = client.db('quotes-db');
    app.listen('5000', () => {
        console.log('server is up on port 5000');
    });
});

app.get('/',(req, res)=>{
    var cursor = db.collection('quotes').find().toArray((error, results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            // res.render('form.hbs',{results: results});
            res.sendFile(path.resolve('./front-end/E-shop/dist/E-shop/index.html'));
            // res.sendFile('./COT/index.html', { root: __dirname });
        }
        
    });
    
});

app.post('/quotes',(req, res) => {
    db.collection('quotes').save(req.body, (error, result) => {
        if(error){
            console.log(error);
        }
        console.log('saved to database');
        res.redirect('/');
    });
});





