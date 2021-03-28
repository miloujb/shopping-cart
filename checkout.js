let products = require("./products")

const checkoutItems = function(){
    function total(){
        let items = {}
        let total = 0
        for(let item in items) {
            let itemQuantity = items[item]
            total += products.calculate(item, itemQuantity)
        }
        return total;
    }
    function scan(item) {

    }

    return {
        scan: scan,
        total: total
    }
}

module.exports = checkoutItems;