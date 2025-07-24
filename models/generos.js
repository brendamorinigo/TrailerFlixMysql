const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require('../conection');

const Genero = sequelize.define('Genero', {
  generosID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  tableName: 'generos',
  timestamps: false
});

module.exports = Genero;