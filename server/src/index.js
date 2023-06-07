const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
///parse body
app.use(express.json())
app.use(cors())
const connectDb = require('./dbConnect/connection')
const Product = require('./model/product')


connectDb()



app.post('/products',)


app.get('/products',async (req,res)=>{
  const data = await Product.find()
  res.json({productList:data})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

