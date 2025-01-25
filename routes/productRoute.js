const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../controllers/authController');
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

router
  .route('/')
  .get(getAllProducts)
  .post(protect, restrictTo('admin'), createProduct);

router
  .route('/:id')
  .get(getProduct)
  .patch(protect, restrictTo('admin'), updateProduct)
  .delete(protect, restrictTo('admin'), deleteProduct);

module.exports = router;
