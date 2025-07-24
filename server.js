const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json()); 
app.use(require('./routs/actores')); 

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

const Actores = require('../models/actores');

app.post('/actores', async (req, res) => {
  try {
    const { nombreCompleto } = req.body;
    const nuevoActor = await Actores.create({ nombreCompleto });

    res.status(201).json(nuevoActor);
  } catch (error) {
    console.error('Error al crear el actor:', error);
    res.status(500).json({ error: 'Error al crear el actor' });
  }
});

module.exports = router;