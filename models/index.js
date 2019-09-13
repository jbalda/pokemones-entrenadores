const mongoose = require('mongoose');
const Pokemon = require ('./pokemon');
const Entrenador = require ('./entrenador');
//Creo un objeto funcion anonima
const connectDb = () =>{
    return mongoose.connect('mongodb://localhost:27017/games',{useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify:false });
};

const models ={
    Pokemon,
    Entrenador
};

module.exports ={
    connectDb,
    models
};