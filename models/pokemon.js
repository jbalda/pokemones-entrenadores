const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemon = new Schema({
    name: String, 
    type: [String],
    base: Object
});

const Pokemon = mongoose.model("Pokemon", pokemon);

module.exports = Pokemon;