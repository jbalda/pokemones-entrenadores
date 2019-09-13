var express = require('express');
var router = express.Router();
const entrenadoresController = require('../controllers/entrenador');


router.get('/', entrenadoresController.getAll);

router.get('/:id',entrenadoresController.getById); //sto sería para que reciba por id.

router.post('/', entrenadoresController.create);

router.put('/:id', entrenadoresController.update);

router.delete('/:id', entrenadoresController.destroy);


module.exports = router;