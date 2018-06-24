'use strict';

const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    user = require('./route/user');

const app = express();

mongoose.connect('mongodb://localhost/bambu');

mongoose.connection.on('open', () => console.log('Mongo Connected'));
mongoose.connection.on('error', err => {
    console.error('Mongo Connection Error', err);
    process.exit(1);
});

app.use(bodyParser.json());

app.use('/user', user);

app.listen(3000, () => console.log('Bambu app listening on port 3000!'));