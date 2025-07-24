const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    options: { encrypt: true }
  },
  define: {
    timestamps: false
  }
});

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