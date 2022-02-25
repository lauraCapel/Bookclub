const cors = require('cors');  // add at the top
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookclubRouter = require('./routes/bookclub');
var bookRouter = require('./routes/books');


var app = express();
app.use(cors());  // add after 'app' is created

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bookclub', bookclubRouter);
app.use('/books', bookRouter);


module.exports = app;
