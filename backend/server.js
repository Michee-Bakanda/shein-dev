const express = require("express")
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const mongoose = require ('mongoose')
const productRoute = require('./routes/ProductRoute')
const wishListRoute = require('./routes/WishListRoute')
const userRoute = require('./routes/UserRoute')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})

mongoose.connect(process.env.MONGO_URI).then(() => {
	console.log('Database successfully connected')
}).catch((error) => {
	console.log(error)
})

app.get('/', (req, res) => {
	res.send('this works')
})

app.use('/api/product', productRoute)
app.use('/api/product', wishListRoute)
app.use('/api/user', userRoute)

//Hello

