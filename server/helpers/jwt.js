const jwt = require('jsonwebtoken');

const secretKey = 'Lisa'

function payloadToToken (payload){
  const convertPayload = jwt.sign(payload,secretKey);
  return convertPayload
}

function verifyTokenToPayload (token){
  const verifyToken = jwt.verify(token,secretKey)
  return verifyToken
}


module.exports = {payloadToToken,verifyTokenToPayload}