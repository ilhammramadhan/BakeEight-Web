const express = require('express');
const AdminController = require('../controllers/adminController');
const router = express.Router()

router.post('/register',AdminController.adminRegister)
router.post('/login',AdminController.adminLogin)
router.get('/items',AdminController.readAllItem)
router.get('/items/:itemId',AdminController.itemById)
router.delete('/items/:itemId/delete',AdminController.deleteItem)
router.put('/items/:itemId/delete')
router.post('/items/add',AdminController.addNewItems)

module.exports = router