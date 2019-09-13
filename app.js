const createError = require('http-errors'); 
const express = require('express');
const path = require('path');
//const cookieParser = require('cookie-parser'); NO USAMOS EN ESTE CASO
const logger = require('morgan');

const pokemonsRouter = require('./routes/pokemon');
const entrenadoresRouter = require('./routes/entrenador');

const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));//Nos va indicando cada cosa que hace nuestro servidor express, pero solo en modo dev.
app.use(express.json()); //Indicamos que vamos a usar Express, con formato Json. Es decir los post que lleguen, van a tener en su body, algo en formato Json
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); //Permite servir archivos estáticos.

app.use('/pokemons', pokemonsRouter);
app.use('/entrenadores', entrenadoresRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  //agregado para nuestro caso que no tenemos vistas
  const error = err.message;
  if(req.app.get('env') === 'development') console.error(err);
  res.status(err.status || 500).json(error);
});

module.exports = app;
