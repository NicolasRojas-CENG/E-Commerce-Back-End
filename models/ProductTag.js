//Import modules.
const { Model, DataTypes } = require('sequelize');

//Import our database connection from config.js
const sequelize = require('../config/connection');

//Initialize ProductTag model by extending off Sequelize's Model class.
class ProductTag extends Model {}

//Creates the table.
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

//Export the routes.
module.exports = ProductTag;