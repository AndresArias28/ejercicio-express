const express = require('express');
const AdminController = require('../controller/adminController'); 
const router = express.Router();

router.post('/agregarLibro', AdminController.agregarLibro )

router.put('/actualizarLibro/:id', AdminController.actualizarLibro )

router.delete('/eliminarLibros', AdminController.eliminarLibroNoDisponible )

// router.get('/estadolibros', usuarioController.verEStadolibrosPrestados )

// router.put('/devolverlibro/:id', usuarioController.devolverLibro )

module.exports = router;