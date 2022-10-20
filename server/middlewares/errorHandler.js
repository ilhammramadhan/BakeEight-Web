
const errorHandler = (err,req,res,next) => {
  let code = 500
  let message = 'Internal Server Error'
  if (err.name === "SequelizeValidationError"){
    code = 400,
    message = err.errors[0].message
  }else if (err.name === "SequelizeUniqueConstraintError"){
    code = 400
    message = "Email is already used"
  }
  else if (err.name === "JsonWebTokenError"){
    code = 401
    message = "Invalid Token"
  }else if (err.name === "Empty Email"){
    code = 400,
    message = "Email is required"
  }else if (err.name === "Empty Password"){
    code = 400,
    message = "Password is required"
  }else if (err.name === "Invalid Input"){
    code = 400,
    message = "Invalid email/password"
  }else {
    code = 500
    message = "Internal Server Error"
  }
  response.status(code).json({message})
}

module.exports = errorHandler