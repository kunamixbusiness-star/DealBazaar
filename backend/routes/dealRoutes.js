const express = require('express');
const router = express.Router();
const { getAllDeals, createDeal, getDealById, markAsSold } = require('../controllers/dealController');

// GET /api/deals - Saare deals dikhao
router.get('/', getAllDeals);

// POST /api/deals - Naya deal post karo ₹500 wala
router.post('/', createDeal);

// GET /api/deals/:id - Ek deal ki detail
router.get('/:id', getDealById);

// PUT /api/deals/:id/sold - Payment ke baad sold mark karo
router.put('/:id/sold', markAsSold);

module.exports = router;
