const express     = require('express'),
      exphbs      = require('express-handlebars'),
      morgan      = require('morgan'),
      bodyParser  = require('body-parser'),
      app         = express(),
      routes      = require('./routes');
      

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('hbs', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

routes(app);
// app.use('/', route);

module.exports = app;