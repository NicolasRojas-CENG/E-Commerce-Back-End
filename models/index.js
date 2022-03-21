//Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Association between Category and Product.
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

//Association between Product and Tag through ProductTag.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

//Exports modules.
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
