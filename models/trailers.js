const { Sequelize, DataTypes } = require("sequelize");
const Categoria = require('./categorias'); 
const Genero = require('./generos'); 
const { sequelize } = require('../conection');

const Trailer = sequelize.define('Trailer', {
  trailersID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  poster: {
    type: DataTypes.STRING(20),
    defaultValue: null
  },
  titulo: {
    type: DataTypes.STRING(30),
    defaultValue: null
  },
  categoriaID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'categoriaID'
    }
  },
  generoID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Genero,
      key: 'generosID'
    }
  },
  Resumen:{
    type: DataTypes.STRING(150),
    defaultValue: null
  },
  Temporadas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Duracion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Trailer:{
    type: DataTypes.STRING(300),
    defaultValue: null
  },
}, 

{
  tableName: 'trailers',
  timestamps: false
});


Trailer.belongsTo(Categoria, { foreignKey: 'categoriaID' });
Trailer.belongsTo(Genero, { foreignKey: 'generoID' });

module.exports = Trailer;