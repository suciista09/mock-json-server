module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");

    return {
        people: _.times(10, function(n){
            return {
                id: n,
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber()
            }
        }),
        product: _.times(5, function(n){
            return {
                id: "product"+n,
                productName: faker.commerce.productName(),
                price: faker.commerce.price()
            }
        })
    }
}