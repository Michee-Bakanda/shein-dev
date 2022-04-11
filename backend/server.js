const express = require("express")
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})