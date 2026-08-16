const Deal = require('../models/Deal');

const deal = await Deal.findById('../models/Deal');
amount: deal.price * 100,
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ₹500 ka Order banao
exports.createOrder = async (req, res) => {
  try {
    const { dealId } = req.body;
const deal = await Deal.findById(dealId);

const options = {
  amount: deal.price * 100,
  currency: "INR",
  receipt: `deal_${dealId}`,
};
    
    const order = await razorpay.orders.create(options);
    
    await Deal.findByIdAndUpdate(dealId, { razorpayOrderId: order.id });
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Payment verify + 20% commission calculate
exports.verifyPayment = async (req, res) => {
  try {
    const { dealId, paymentId } = req.body;
    
    const deal = await Deal.findById(dealId);
    const totalAmount = 500;
    const commission = (totalAmount * 20) / 100; // ₹100 humara
    const sellerAmount = totalAmount - commission; // ₹400 seller ko
    
    deal.isSold = true;
    deal.buyerPaymentId = paymentId;
    await deal.save();
    
    res.json({ 
      success: true, 
      message: `Payment done! Commission: ₹${commission}, Seller gets: ₹${sellerAmount}` 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment } = require('../controllers/paymentController');

// POST /api/payment/create-order - ₹500 ka order banao
router.post('/create-order', createOrder);

// POST /api/payment/verify - Payment verify karo
router.post('/verify', verifyPayment);

module.exports = router;

