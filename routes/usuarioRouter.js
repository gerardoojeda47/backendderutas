const express = require('express');
const router = express.Router();

// Ruta GET para listar usuarios (implementación pendiente)
router.get('/', (req, res) => {
  res.json({ mensaje: 'Lista de usuarios (implementación pendiente)' });
});

module.exports = router;