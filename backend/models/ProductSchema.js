const mongoose = require ('mongoose')

const ProductSchema = mongoose.Schema({
    product_name:{
        type:String,
        require:true
    },
    product_description:{
        type:String,
        require:true
    },
    product_price:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("Product", ProductSchema)