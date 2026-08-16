const Deal = require('../models/Deal');

// 1. Saare deals dikhana - Home Page
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find({ isSold: false }).sort({ createdAt: -1 });
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Naya deal post karna - ₹500 fixed
exports.createDeal = async (req, res) => {
  try {
    const { title, description, image, seller } = req.body;
    
    const deal = new Deal({
      title,
      description,
      price: 500, // Fixed ₹500
      image,
      seller
    });
    
    const savedDeal = await deal.save();
    res.status(201).json(savedDeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 3. Ek deal ki details
exports.getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ message: 'Deal not found' });
    res.json(deal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. Deal sold mark karna payment ke baad
exports.markAsSold = async (req, res) => {
  try {
    const { paymentId } = req.body;
    const deal = await Deal.findByIdAndUpdate(
      req.params.id,
      { isSold: true, buyerPaymentId: paymentId },
      { new: true }
    );
    res.json(deal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
