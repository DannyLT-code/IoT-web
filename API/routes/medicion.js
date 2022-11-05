//Indica las rutas que reciben las peticiones HTTP
//e indican el codigo que ejecutaran

const express = require('express');
const router = express.Router();
const medicionController = require('../controllers/medicion.controller.js');

router.get('/medicion/:tipo', medicionController.obtenerMedicionPorTipo);
router.get('/medicion', medicionController.obtenerMediciones);
router.post('/medicion/:tipo', medicionController.insertarMedicion);
router.put('/medicion/:id', medicionController.actualizarMedicion);
router.delete('/medicion/:id', medicionController.eliminarMedicion);

module.exports = router;