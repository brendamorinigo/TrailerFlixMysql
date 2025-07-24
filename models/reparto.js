const { DataTypes } = require("sequelize");
const { sequelize } = require('../conection');
const Trailer = require('./trailers');
const Actores = require('./actores');

const Reparto = sequelize.define('Reparto', {
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
  }
}, {
  tableName: 'reparto',
  timestamps: false
});

module.exports = Reparto;