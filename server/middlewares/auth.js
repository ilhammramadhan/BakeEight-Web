const { verifyTokenToPayload } = require('../helpers/jwt');
const {User} = require('../models');


let authentication = async (request,response,next)=> {
  try {
    const access_token = request.headers.access_token
    if (!access_token){
      throw {name : "Not Login"}
    }
    let payload = verifyTokenToPayload(access_token)
    let loggedInUser = await User.findByPk(payload.id)
    if(!loggedInUser){
      throw {name : "Not Login"}
    }
    request.user = {
      id : loggedInUser.id,
      email : loggedInUser.email,
      role : loggedInUser.role
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authentication