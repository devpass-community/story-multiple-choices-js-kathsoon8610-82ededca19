function chooseProduct(segment) {
    if (segment === "Beverage") {
        return "Soda";
    } else if (segment === "Fruit") {
        return "Apple";
    } else if (segment === "Hygiene") {
        return "Soap";
    }
}


module.exports = chooseProduct;
