const { DataTypes } = require("sequelize");
const { sequelize } = require('../conection');
const Trailer = require('./trailers');
const Genero = require('./generos');

const TrailerGenero = sequelize.define('TrailerGenero', {
  trailersID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Trailer,
      key: 'trailersID'
    }
  },
  generosID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Genero,
      key: 'generosID'
    }
  }
}, {
  tableName: 'trailergenero',
  timestamps: false
});

module.exports = TrailerGenero;