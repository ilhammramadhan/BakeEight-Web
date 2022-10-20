const express = require('express');
const router = express.Router()
const userRouter = require('./customer');
const adminRouter = require('./admin');


router.use('/admin' , adminRouter)
router.use('/user',userRouter)



module.exports = router
