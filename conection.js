const { Sequelize } = require('sequelize');
require('dotenv').config(); // Muy importante para leer las variables de entorno

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306, // opcional, por si se usa otro puerto
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  }
);

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos correctamente');
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
  }
}

async function closeConnection() {
  try {
    await sequelize.close();
    console.log('Desconexión exitosa');
  } catch (error) {
    console.error('Error en la desconexión:', error);
  }
}

module.exports = {
  sequelize,
  authenticate,
  closeConnection
};