let products = require("./products")

function checkoutItems(){

        let items = {}
        let total = 0
        for(let item in items) {
            let itemQuantity = items[item]
            total += products.calculate(item, itemQuantity)
   
        return checkoutItems;
    }
}

function scan(item) {
    let currentQuantity = items[item] || 0;
    items[item] = ++ currentQuantity;
}

module.exports = {checkoutItems, scan};