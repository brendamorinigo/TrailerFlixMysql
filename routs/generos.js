const express = require('express');
const router = express.Router();
const Genero = require('../models/generos');

//traer todos los géneros
router.get('/', async (req, res) => {
  try {
    const generos = await Genero.findAll();
    res.json(generos);
  } catch (error) {
    console.error('Error al obtener los géneros:', error);
    res.status(500).json({ error: 'Error al obtener los géneros' });
  }
});

// crear un nuevo género
router.post('/', async (req, res) => {
  try {
    const nuevoGenero = await Genero.create(req.body);
    res.status(201).json(nuevoGenero);
  } catch (error) {
    console.error('Error al crear género:', error);
    res.status(500).json({ error: 'Error al crear género' });
  }
});

module.exports = router;