const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const app = express();

const Trailer = require('./models/Trailer');

app.use(express.json()); 
app.use(require('./routs/actores')); 

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

app.use(express.json());

app.post('/trailers', async (req, res) => {
  try {
    const nuevoTrailer = await Trailer.create(req.body);
    res.status(201).json(nuevoTrailer);
  } catch (error) {
    console.error('Error al crear el trailer:', error);
    res.status(500).json({ error: 'Error al crear el trailer' });
  }
});

module.exports = router;