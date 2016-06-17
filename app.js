'use strict';

const PORT = process.env.PORT || 8000;

/////// REQUIRES ///////

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


/////// APP DECLARATION ///////

let app = express();

/////// APP CONFIGURATION ///////

app.set('view engine', 'pug');

/////// GENERAL PURPOSE MIDDLEWARE ///////

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


/////// ROUTES ///////

app.get('/', (req, res) => {

  // res.render() will...
  // find the named template in the views directory
  // render that template into html
  // respond with that html
  
  let myAwesomeColors = ['red','blue','yellow','burgundy', 'fuscia'];

  res.render('index', {colors: myAwesomeColors});

  // object represents the injected values
});


// app.get('/quote', (req, res) => {

//   // request a stock quote
//   // inject the received date into the pug
//   // pug will render that onto the page


// })




/////// APP LISTEN ///////

app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});

