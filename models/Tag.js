//Import modules.
const { Model, DataTypes } = require('sequelize');

//Import our database connection from config.js
const sequelize = require('../config/connection.js');

//Initialize Tag model by extending off Sequelize's Model class.
class Tag extends Model {}

//Creates the table.
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//Export the routes.
module.exports = Tag;