const express = require('express')
const app = express()
const port = 3000
const errorHandlers = require('./middlewares/handleErrors');
const router = require('./routes');


const cors = require('cors');


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(errorHandlers)

app.use('/',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})