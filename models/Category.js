//Import modules.
const { Model, DataTypes } = require('sequelize');

//Import our database connection from config.js
const sequelize = require('../config/connection.js');

//Initialize Category model by extending off Sequelize's Model class.
class Category extends Model {}

//Creates the table.
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//Export the routes.
module.exports = Category;