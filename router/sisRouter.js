const express = require('express');
const SisController = require('../controller/sisController'); 
const router = express.Router();

router.get('/masSolicitados', SisController.verMasSolicitados )
router.get('/prestamosRecientes', SisController.ultimosPrestamos )

module.exports = router;