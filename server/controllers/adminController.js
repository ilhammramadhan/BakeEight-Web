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
      const {name,description,price,imgUrl,CategoryId , Ingredients} = req.body
      const newItem = await Item.create({name,description,price,imgUrl,CategoryId,UserId},{ transaction: t })
      const ingredientInput = Ingredients.map(el => {
        return {name : el , ItemId : newItem.id}
      })
      await Ingredient.bulkCreate(ingredientInput,{transaction: t})
      await t.commit()
      res.status(201).json({message : 'Item created successfully'})
    } catch (error) { 
      await t.rollback()
      next(error)
    }
  }
}


module.exports = AdminController
