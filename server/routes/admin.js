const express = require('express');
const AdminController = require('../controllers/adminController');
const authentication = require('../middlewares/auth');
const router = express.Router()


router.post('/login',AdminController.adminLogin)
router.use(authentication)
router.post('/register',AdminController.adminRegister)
router.get('/items',AdminController.readAllItem)
router.get('/items/:itemId',AdminController.itemById)
router.delete('/items/:itemId/delete',AdminController.deleteItem)
router.put('/items/:itemId/edit')
router.post('/items/add',AdminController.addNewItems)
router.get('/category',AdminController.readAllCategory)
router.post('/category/add',AdminController.addNewCategory)

module.exports = router