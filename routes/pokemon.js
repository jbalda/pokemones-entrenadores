var express = require('express');
var router = express.Router();
const pokemonsController = require('../controllers/pokemon');


router.get('/', pokemonsController.getAll);

router.get('/:id',pokemonsController.getById); //sto sería para que reciba por id.

router.post('/', pokemonsController.create);

router.put('/:id', pokemonsController.update);

router.delete('/:id', pokemonsController.destroy);


module.exports = router;