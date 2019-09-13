var usersRouter = require('./routes/jugadores');
const { app } = require("./app");
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); //Permite servir archivos estáticos.
// app.use('/', indexRouter); //Esta es para probar
app.use('/jugadores', usersRouter);
