const Product = require('../models/ProductSchema')
const router = require('express').Router()

//Create a product_name
router.post('/create_product', async(req, res) => {
    try {
        //Create a product_name
        const newProduct = new Product ({
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            product_price: req.body.product_price
        })

        //Save new product and respond 
        const product = await newProduct.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get all Products 
router.get('/get_products', async(req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(error) {
        res.status(404).json(error)
    }
})

//Update product wishlist
router.put('/update_product/:product_id', async(req, res) =>{
    try {
        const products = await Product.findByIdAndUpdate(req.params.product_id,{
            $set:req.body
        },{new:true})

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router