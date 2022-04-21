const User = require('../models/UserSchema')
const router = require('express').Router()

//Create a wishlist
router.post('/create_user', async(req, res) => {
    try {
        //Create a wishlist
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        //Save new product and respond 
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get all Products 
router.get('/get_users', async(req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error) {
        res.status(404).json(error)
    }
})

module.exports = router