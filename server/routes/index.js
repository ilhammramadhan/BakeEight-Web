const express = require('express');
const router = express.Router()
const userRouter = require('./customer');
const adminRouter = require('./admin');

router.get('/',(req,res,next)=>{
  res.send('WELCOME TO MY SERVER')
})
router.use('/admin' , adminRouter)
router.use('/customer',userRouter)



module.exports = router
