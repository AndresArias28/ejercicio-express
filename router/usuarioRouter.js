const express = require('express');
const usuarioController = require('../controller/usuarioController'); // Sin destructuring
const router = express.Router();

router.get('/libro', usuarioController.consultarCatalogo )

router.get('/estadolibros', usuarioController.verEStadolibrosPrestados )

router.put('/devolverlibro/:id', usuarioController.devolverLibro )

module.exports = router;