const db = require('../models');
const Pokemon = db.models.Pokemon;

function getAll(req, res, next) {

    const name = req.query.name;
    //$regex asi para que contenga el name del pokemon lo pasado y para que la búsqueda sea case insensitive. (esto es de mongoose)
    let find = name ? Pokemon.find({name: {$regex: name, $options:'i'}}) : Pokemon.find(); 
    return find.then(pokemons=> { return res.status(200).json(pokemons);
    }).catch(next);
  }
  

  function getById(req, res, next) {
    //const id = Number(req.params.id); //Si no puede castear le asigna un NaN.
    const id = req.params.id; 
    if (!id) { //Nan pertenece a los valores de PS que se consideran Falsy como el cero, false, "",undefined, null
      return res.status(500).json({
        message: 'No se recibió ningún id de consulta'
      });
    }
  
    return Pokemon.findById(id)
      .then(p => {
        if (!p) {
          return res.status(404).json({
            message: 'No se encontró ningún pokemon con el id: ' + id
          });
        }
        res.status(200).json(p);
      })
      .catch(next);
  }
  
  function create (req, res, next){
    const body = req.body;
  
    //este obpeto será el documento que voy a guardar
    const pokemon = {
      name: body.name,
      type: body.type,
      base: body.base,
    };
  
    return Pokemon.create(pokemon).then(newPokemon => {
      return res.status(200).json(newPokemon);
    }).catch(next);
  }
  
  function update (req, res, next){
    const id = req.params.id;
    const body = req.body;
  
    const pokemon = {
        name: body.name,
        type: body.type,
        base: body.base,
      };
      //primero se usó Pokemon.findOneAndUpdate pero luego se aconsepó updateOne
    return Pokemon.findByIdAndUpdate({_id: id},pokemon, {new: true}).then(updatedPokemon => {
      return res.status(200).json(updatedPokemon);
    }).catch(next);
  }
  
  
  function destroy (req, res, next){
    const id = req.params.id;

    return Pokemon.findByIdAndDelete(id).then(destroyedPokemon => {
      return res.status(200).json(destroyedPokemon);
    }).catch(next);
  }

  module.exports = {
    getAll,
    getById,
    create,
    update,
    destroy
  };

