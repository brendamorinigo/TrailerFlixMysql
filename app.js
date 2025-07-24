const express = require('express');
const app = express();

// importacion de rutas
const actoresRoutes = require('./routs/actores'); 
const generosRoutes = require('./routs/generos');

app.use(express.json());

// uso de rutas
app.use('/actores', actoresRoutes); +
app.use('/generos', generosRoutes)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});