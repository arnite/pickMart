const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const Cart = require('./../models/cartModel');
const Product = require('./../models/productModel');

exports.cartExtra = catchAsync(async (req, res, next) => {
  req.params.userId = req.user.id;
  next();
});

exports.cartMiidleWare = catchAsync(async (req, res, next) => {
  req.body.userId = req.user.id;
  next();
});

exports.addToCart = catchAsync(async (req, res, next) => {
  const { userId, productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) return new AppError('Product not found', 404);

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    // Create a new cart if it doesn't exist
    cart = new Cart({ userId, products: [{ productId, quantity }] });
  } else {
    // Check if product is already in the cart
    const productIndex = cart.products.findIndex(
      (p) => p.productId.toString() === productId
    );
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
  }

  await cart.save();
  res.status(200).json({
    status: 'success',
    data: {
      cart,
    },
  });
});

exports.getCart = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  const cart = await Cart.findOne({ userId }).populate('products.productId');
  if (!cart) return next(new AppError('Cart not found', 404));

  res.status(200).json(cart);
});
