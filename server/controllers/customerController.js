const {Item,Category,Ingredient} = require('../models');

class CustomerController{
  static async readAllItem(req,res,next){
    try {
      const allItem = await Item.findAll()
      res.status(200).json(allItem)
    } catch (error) {
      next(error)
    }
  }
  static async readItemDetail(req,res,next){
    try {
      const {itemId} = req.params
      const availItem = await Item.findByPk(itemId)
      if(!availItem){
        throw {name : 'Not Found'}
      }
      const itemDetail = await Item.findOne({
        include : [{
          model : Category
        },{
          model : Ingredient
        }],
        where : {
          id : availItem.id
        }
      })
      res.status(200).json(itemDetail)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CustomerController