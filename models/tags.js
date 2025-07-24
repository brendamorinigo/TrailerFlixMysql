const { DataTypes } = require("sequelize");
const { sequelize } = require('../conection');

const Tags = sequelize.define('Tags', {
  tagID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: 'tags',
  timestamps: false
});

module.exports = Tags;