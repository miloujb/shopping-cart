function getTotal(item, quantity) {
    let result = {
        offerTotal: 0,
        unmatched: quantity
    }

    let specialOffer = offers[item];
    if (specialOffer && quantity >= specialOffer.quantity) {

    }
    return result
}

let offers = {}