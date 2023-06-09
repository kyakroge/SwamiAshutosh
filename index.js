const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
var fbPostController = require('./controllers/fbPostController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, ()=>console.log('server started at port : 3000'));

app.use('/fbPosts', fbPostController);