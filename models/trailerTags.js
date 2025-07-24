const { DataTypes } = require("sequelize");
const { sequelize } = require('../conection');
const Trailer = require('./trailers');
const Tags = require('./tags');

const TrailerTags = sequelize.define('TrailerTags', {
  trailersID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Trailer,
      key: 'trailersID'
    }
  },
  tagID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Tags,
      key: 'tagID'
    }
  }
}, {
  tableName: 'trailertags',
  timestamps: false
});

module.exports = TrailerTags;