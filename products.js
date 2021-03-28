let getTotal = require('./offerCalculator')
let addOfferToReceipt = require('./offerCalculator')

let products = {
    A: {
        unitPrice: 50,
        discountPrice: {
            quantity: 3,
            price: 140
        }
    },
    B: {
        unitPrice: 35,
        discountPrice: {
            quantity: 2,
            price: 60
        }
    },
    C: {
        unitPrice: 25
    },
    D: {
        unitPrice: 12
    }
}

function calculate () {
    let total = 0;
    let calculateResult = getTotal(item, quantity);
    total += products[item] * calculateResult.unmatched;
    total += addOfferToReceipt;
    return total;
}