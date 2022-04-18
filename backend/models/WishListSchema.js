const mongoose = require ('mongoose')

const WishListSchema = mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    product_id:{
        type:String,
        require:true
    }
    
},{timestamps:true})

module.exports = mongoose.model("Wishlist", WishListSchema)