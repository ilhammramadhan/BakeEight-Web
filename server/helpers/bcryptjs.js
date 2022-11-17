let bcrypt = require('bcryptjs');


function hashPassword(password) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash
}

function comparePassword(hash,password) {
  const comparePassword = bcrypt.compareSync(password,hash)

  return comparePassword
}


module.exports = {hashPassword,comparePassword}