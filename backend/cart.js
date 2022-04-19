module.exports = function Cart(emptyCart) {
    this.items = emptyCart.items || {};
    this.totalQty = emptyCart.totalQty || 0;
    this.totalPrice = emptyCart.totalPrice || 0;

    this.addToCart = function (item, id) {
        let cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        cartItem.qty++;
        cartItem.price = cartItem.item.price * cartItem.qty;
        this.totalQty++;
        this.totalPrice += cartItem.item.price;
    };

    this.reduceOne = function (id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        if(this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };

    this.removeItem = function (id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };

    this.generateArray = function () {
        const arr = [];
        for (let id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};