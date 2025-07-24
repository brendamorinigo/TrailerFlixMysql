const express = require('express');
const app = express();

// importación de rutas
const actoresRoutes = require('./routs/actores'); 
const generosRoutes = require('./routs/generos');
const tagsRoutes= require('./routs/tags');
app.use(express.json());

// uso de rutas
app.use('/actores', actoresRoutes);
app.use('/generos', generosRoutes);
app.use('/tags', tagsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});