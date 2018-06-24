'use strict';

const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    user = require('./route/user');

const app = express();

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/bambu';
mongoose.connect(mongoUri);

mongoose.connection.on('open', () => console.log('Mongo Connected'));
mongoose.connection.on('error', err => {
    console.error('Mongo Connection Error', err);
    process.exit(1);
});

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/user', user);

app.listen(process.env.PORT || 3000, () => console.log('Bambu app listening on port 3000!'));
