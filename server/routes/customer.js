const express = require('express');
const CustomerController = require('../controllers/customerController');
const router = express.Router()

router.get('/items', CustomerController.readAllItem)
router.get('/items/:itemId', CustomerController.readItemDetail)

module.exports = router