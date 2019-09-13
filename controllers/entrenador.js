const db = require('../models');
const Entrenador = db.models.Entrenador;


function getAll(req, res, next) {
  const cantmedallas = req.query.cantmedallas;
  
  let find = cantmedallas ? Entrenador.find({ cantmedallas}) : Entrenador.find();
  return find.populate('pokemones').then(entrenadores => {
    return res.status(200).json(entrenadores);
  }).catch(next);
}

function getById(req, res, next) {
  const id = req.params.id; 
  if (!id) { 
    return res.status(500).json({
      message: 'No se recibió ninún id de consulta'
    });
  }

  return Entrenador.findById(id).populate('pokemones')
    .then(p => {
      if (!p) {
        return res.status(404).json({
          message: 'No se encontró ningún entrenador con el id: ' + id
        });
      }
      res.status(200).json(p);
    })
    .catch(next);
}

function create (req, res, next){
  const body = req.body;

  const entrenador = {
    nombre: body.nombre,
    cantmedallas: body.cantmedallas,
    pokemones: body.pokemones,
  };

  return Entrenador.create(entrenador).then(newEntrenador => {
    return res.status(200).json(newEntrenador);
  }).catch(next);
}

function update (req, res, next){
  const id = req.params.id;
  const body = req.body;

  const entrenador ={};
  if(body.nombre)entrenador.nombre = body.nombre;
  if(body.cantmedallas)entrenador.cantmedallas = body.cantmedallas;
  if(body.pokemones)entrenador.pokemones = body.pokemones;

  return Entrenador.findByIdAndUpdate({_id: id},entrenador, {new: true}).then(updatedEntrenador => {
    return res.status(200).json(updatedEntrenador);
  }).catch(next);
}

function destroy (req, res, next){
  const id = req.params.id;

  return Entrenador.findByIdAndDelete(id).then(destroyedEntrenador => {
    return res.status(200).json(destroyedEntrenador);
  }).catch(next);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
};