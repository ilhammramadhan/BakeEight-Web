const express = require('express');
const AdminController = require('../controllers/adminController');
const authentication = require('../middlewares/auth');
const router = express.Router()


router.post('/login',AdminController.adminLogin)
router.use(authentication)
router.post('/register',AdminController.adminRegister)
router.get('/items',AdminController.readAllItem)
router.get('/items/:itemId',AdminController.itemById)
router.delete('/items/:itemId',AdminController.deleteItem)
router.put('/items/:itemId/edit')
router.post('/items',AdminController.addNewItems)
router.get('/category',AdminController.readAllCategory)
router.get('/category/:categoryId',AdminController.categoryById)
router.post('/category',AdminController.addNewCategory)
router.delete('/category/:categoryId',AdminController.deleteCategory)
router.put('/category/:categoryId',AdminController.editCategory)

module.exports = router