const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../controllers/authController');
const {
  orderMiidleWare,
  orderExtra,
  createOrder,
  getAllOrders,
  getOrder,
} = require('../controllers/orderController');

router.use(protect);

router
  .route('/')
  .post(restrictTo('user'), orderMiidleWare, createOrder)
  .get(restrictTo('admin'), getAllOrders);

router.route('/:userId').get(restrictTo('user'), orderExtra, getOrder);

module.exports = router;
