const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', hbs);
//app.use(express.static(__dirname));
app.use((req,res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} : ${req.url}`;
    console.log(log);
    fs.appendFile('server-log',log + '\n', (err) =>{
        console.log(err);
    });
    next();
});

app.use((req, res, next)=>{
    res.render('maintainance.hbs');
    next();
});

app.get('/', (req, res) => {
    res.render('home.hbs',
        {
            headerText: 'This is the home page',
            bodyText: 'Welcome to home page',
            year: new Date().getFullYear()
        }
    );
});

app.get('/about', (req, res) => {
    res.render('about.hbs', { headerText: 'This is About page',year: new Date().getFullYear() });
});


app.listen(5000, () => {
    console.log('server started on port 5000');
});

