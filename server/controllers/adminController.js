const { comparePassword } = require('../helpers/bcryptjs');
const { payloadToToken } = require('../helpers/jwt');
const {User,Item,Category,Ingredient,sequelize} = require('../models');


class AdminController {
  static async adminRegister(req,res,next) {
    try {
      const {username,email,password,phoneNumber,address} = req.body
      const newAdmin = await User.create({username,email,password,role:'Admin',phoneNumber,address})
      res.status(201).json({message : `Success Register with email ${newAdmin}`})
    } catch (error) {
      next(error)
    }
  }
  static async adminLogin (req,res,next){
    try {
      const {email,password} = req.body
      if(!email){
        throw {name : 'Empty Email'}
      }
      else if(!password){
        throw {name : 'Empty Password'}
      }
      const userLogin = await User.findOne({
        where : {
          email
        }
      })
      if(!userLogin){
        throw {name : 'Invalid Input'}
      }
      const isValid = comparePassword(userLogin.password,password)
      if(!isValid){
        throw {name : 'Invalid Input'}
      }
      const payload = {
        id : userLogin.id
      }
      const access_token = payloadToToken(payload)
      res.status(200).json({access_token})
    } catch (error) {
      next(error)
    }
  }
  static async readAllItem(req,res,next){
    try {
      const allItems = await Item.findAll({
        include : [{
          model : Category
        },{
          model : Ingredient
        }]
      })
      res.status(200).json(allItems)
    } catch (error) {
      next(error)
    }
  }
  static async itemById(req,res,next){
    try {
      const {itemId} = req.params
      const availItem = await Item.findByPk(itemId)
      if(!availItem){
        throw{name : 'Item not found'}
      }
      res.status(200).json(availItem)
    } catch (error) {
      next(error)
    }
  }
  static async deleteItem(req,res,next){
    try {
      const {itemId} = req.params
      const availItem = await Item.findByPk(itemId)
      if(!availItem){
        throw{name : 'Item not found'}
      }
      await Item.destroy({
        where : {
          id : availItem.id
        }
      })
      res.status(200).json({message : 'Success Delete Item'})
    } catch (error) {
      next(error)
    }
  }
  static async addNewItems(req,res,next){
    const t = await sequelize.transaction()
    try {
      const {id : UserId} = req.user
      console.log(req.body)
      const {name,description,price,imgUrl,CategoryId , ingredients} = req.body
      
      const newItem = await Item.create({name,description,price,imgUrl,CategoryId,UserId},{ transaction: t })
      const ingredientInput = ingredients.map(el => {
        return {name : el.name , ItemId : newItem.id}
      })
      await Ingredient.bulkCreate(ingredientInput,{transaction: t})
      await t.commit()
      res.status(201).json({message : 'Item created successfully'})
    } catch (error) { 
      console.log(error)
      await t.rollback()

      next(error)
    }
  }
  static async readAllCategory(req,res,next){
    try {
      const allCategories = await Category.findAll()
      res.status(200).json(allCategories)
    } catch (error) {
      next(error)
    }
  }
  static async addNewCategory(req,res,next){
    try {
      const {name} = req.body
      await Category.create({name})
      res.status(201).json({message : 'Success add category'})
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
  static async deleteCategory(req,res,next){
    try {
      const {categoryId : id} = req.params
      const availCategory = await Category.findByPk(id)
      if(!availCategory){
        throw {name : 'Not Found'}
      }
      await Category.destroy({
        where : {
          id
        }
      })
      res.status(200).json({msg : 'Category has been deleted'})
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
  static async categoryById (req,res,next) {
    try {
      const {categoryId : id} = req.params
      const availCategory = await Category.findByPk(id)
      if(!availCategory){
        throw {name : 'Not Found'}
      }
      res.status(200).json(availCategory)
    } catch (error) {
      next(error)
    }
  }
  static async editCategory(req,res,next){
    try {
      const {categoryId : id} = req.params
      const {name} = req.body
      const availCategory = await Category.findByPk(id)
      if(!availCategory){
        throw {name : 'Not Found'}
      }
      await Category.update({name},{
        where : {
          id
        }
      })
      res.status(200).json({message : 'Success update category'})
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
  static async editItem(req,res,next){
    try {
      const {id : UserId} = req.user
      const {itemId : id} = req.params
      const {name,description,price,imgUrl,CategoryId} = req.body
      const availItem = await Item.findByPk(id)
      if(!availItem){
        throw {name : 'Not Found'}
      }
      await Item.update({name,description,price,imgUrl,CategoryId,UserId},{
        where : {
          id
        }
      })
      
      res.status(201).json({message : 'Item created successfully'})
    } catch (error) { 
      next(error)
    }
  }
}



module.exports = AdminController
