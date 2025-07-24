//busqueda por titulo
trailers.findOne({ where: { titulo: 'titanic' } }) //buscar donde el titulo sea =
  .then((trailer) => {
    if (trailer) {
      console.log('Titulo encontrado:', trailer);
    } else {
      console.log('Titulo no encontrado');
    }
  })
  .catch((error) => {
    console.error('Error al buscar el titulo:', error);
  });
//traer todos los registros
 trailers.findAll()
  .then((peliculas) => {
    console.table(peliculas);
  })
  .catch((error) => {
    console.error('Error al buscar las películas:', error);
  });

//busqueda parcial por coincidencia
const { Op } = require('sequelize'); 
Trailer.findAll({
  where: {
    titulo: {[Op.like]: '%Stranger%'} //trae todos los registros de la tabla trailers donde el titulo tenga “stranger”.
  }
})
  .then((trailers) => {
    console.table(trailers);
  })
  .catch((error) => {
    console.error('Error al buscar los trailers:', error);
  });

  //crear nuevo registro
const Trailer = require('./models/Trailer');
Trailer.create({
  poster: 'poster1.jpg',
  titulo: 'Stranger Things',
  categoriaID: 1,          
  generoID: 2,             
  Resumen: 'Una serie de ciencia ficción ambientada en los 80s.',
  Temporadas: 4,
  Duracion: 45,
  Trailer: 'https://youtu.be/b9EkMc79ZSU'
})
.then((trailer) => {
  console.log('Trailer creado:', trailer);
})
.catch((error) => {
  console.error('Error al crear el trailer:', error);
});