const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Aquí creo el schema para mongoose de entrenador.
const entrenador = new Schema({
    nombre: String,
    cantmedallas: Number,
    pokemones: [{type:Schema.Types.ObjectId, ref:'Pokemon'}], //Guarda los ids, pero al momento de recuperarlo podemos indicarlo que transforme los id en los objetos juegos. 
    createAt: {type:Date, default: Date.now},
});

//Creo el modelo, le asigno el nombre al modelo, y le paso la estructura o schema, y el nombre que tendrá la coleccion en mongodb.
//Si no le asigno un nombre a la coleccion le pone automaticamente el nombre del nomdelo pluralizado
//De esta manera mongoose está al tanto de este esquema y nos permitirá acceder a sus atributos y demás más facil
const Entrenador = mongoose.model('Entrenador', entrenador, 'entrenadores');

module.exports = Entrenador;