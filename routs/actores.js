const express = require('express');
const router = express.Router();
const Actores = require('../models/actores'); // importás tu modelo

// Obtener todos los actores
router.get('/', async (req, res) => {
  try {
    const actores = await Actores.findAll();
    res.json(actores);
  } catch (error) {
    console.error('Error al obtener los actores:', error);
    res.status(500).json({ error: 'Error al obtener los actores' });
  }
});

// Crear un nuevo actor
router.post('/', async (req, res) => {
  try {
    const nuevoActor = await Actores.create(req.body);
    res.status(201).json(nuevoActor);
  } catch (error) {
    console.error('Error al crear actor:', error);
    res.status(500).json({ error: 'Error al crear actor' });
  }
});

module.exports = router;