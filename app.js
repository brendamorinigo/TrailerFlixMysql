const express = require('express');
const app = express();

// Importación de rutas
const actoresRoutes = require('./routs/actores'); 

app.use(express.json());

// Uso de rutas
app.use('/actores', actoresRoutes); 

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a TrailerFlix API');
});

// Levantar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});