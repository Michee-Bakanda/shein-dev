const Product = require('../models/product');


// databas connection string
const dbURL="";
mongoose.connect(dbURL,{useNewurlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('connected to database')).catch((err)=>console.log(err))
exports.addToCart = (req, res, next) => {
    req.user.addToCart(req.body.id)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            console.log(user);
   
        })
        .catch(err => console.log(err));
}

exports.removeFromCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));

}

