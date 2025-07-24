const { DataTypes } = require("sequelize");
const { sequelize } = require('../conection');
const Trailer = require('./trailers');
const Actores = require('./actores');

const TrailerActor = sequelize.define('TrailerActor', {
  trailersID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Trailer,
      key: 'trailersID'
    }
  },
  actoresID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Actores,
      key: 'actoresID'
    }
  },
  personaje: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'traileractor',
  timestamps: false
});

module.exports = TrailerActor;