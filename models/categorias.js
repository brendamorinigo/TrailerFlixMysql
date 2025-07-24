const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require('../conection');

const Categoria = sequelize.define('Categoria', {
  categoriaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(20),
    defaultValue: null
  }
}, {
  tableName: 'categorias',
  timestamps: false
});

module.exports = Categoria;