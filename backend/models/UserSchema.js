const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("User", UserSchema)