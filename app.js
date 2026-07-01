var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const connectionPool = require('./database/connectionPool');

var indexRouter = require('./routes/index');
var photosRouter = require('./routes/photos');

var app = express();

connectionPool.init();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/photos', photosRouter);

module.exports = app;
