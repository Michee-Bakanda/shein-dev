const WishList = require('../models/WishListSchema')
const router = require('express').Router()

//Create a wishlist
router.post('/create_wishlist', async(req, res) => {
    try {
        //Create a wishlist
        const newWishlist = new WishList ({
            userId:req.body.userId,
            product_id:req.body.product_id
        })

        //Save new product and respond 
        const wishlist = await newWishlist.save()
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get specific wishlist 
router.get('/get_users_wishlist/:userId', async(req, res) => {
    try{
        const wishlist = await WishList.find({userId: req.params.userId})
        res.status(200).json(wishlist)
    }catch(error) {
        res.status(404).json(error)
    }
})

module.exports = router