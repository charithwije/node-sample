const http = require('http');
const fs = require('fs');


const express = require('express');

const app = express();
const bodyParser = require('body-parser')

var port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('json spaces', 40);
//app.use(express.static(__dirname + '/COT'));

app.get('/', (req, res) => {
    //res.sendFile('./COT/index.html', { root: __dirname });
    res.sendFile('/index.html', { root: __dirname });
});



app.get('/getItems', (req, res) => {
    res.json({'name':'Grant', 'age': 15});
});

app.post('/submit-student-data', (req, res) => {
    res.send(req.body.firstName + req.body.lastName);
});

app.put('/update-data', (req, res) => {
    res.send('PUT Request');
});

app.delete('/delete-data', (req, res) => {
    res.send('DELETE Request');
});


var server = app.listen(port, ()=>{
    console.log('\x1b[33m%s\x1b[0m',`Server is running on port ${port}`);
})



// reding files skipped.
// event emmiter skipped.
// serving static files skipped
