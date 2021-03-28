function getTotal(item, quantity) {
    let result = {
        offerTotal: 0,
        unmatched: quantity
    }

    let specialOffer = offers[item];
    if (specialOffer && quantity >= specialOffer.quantity) {
        let sumMatches = Math.floor(quantity / specialOffer.quantity);
        result.unmatched = quantity % specialOffer.quantity;
        result.offerTotal = specialOffer.price * sumMatches;
    }
    return result;
}

let offers = {};

function addOfferToReceipt(item, quantity, price) {
    offers[item] = {
        quantity: quantity,
        price: price
    }
}

module.exports = {getTotal, addOfferToReceipt}