const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require('../conection');

const Actores = sequelize.define('Actores', {
  actoresID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombreCompleto: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'actores', 
  timestamps: false
});

module.exports = Actores;