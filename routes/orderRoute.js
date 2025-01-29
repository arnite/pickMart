const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../controllers/authController');
const {
  orderMiidleWare,
  createOrder,
  getAllOrders,
  getOrder,
} = require('../controllers/ordersController');

router.use(protect);

router
  .route('/')
  .post(restrictTo('user'), orderMiidleWare, createOrder)
  .get(restrictTo('admin'), getAllOrders);

router.route('/:userId').get(restrictTo('user'), getOrder);

module.exports = router;
