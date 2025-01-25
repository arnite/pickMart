const Product = require('../models/productModel');
const {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
} = require('./handlerFactory');

exports.createProduct = createOne(Product);
exports.getProduct = getOne(Product);
exports.getAllProducts = getAll(Product);
exports.updateProduct = updateOne(Product);
exports.deleteProduct = deleteOne(Product);
