// Class:- It is a blueprint of an object.
// ----------------------------

// let mobile = {
//     brand : 'Apple',
//     price : 35000,
//     color : 'silver'
// };
// console.log(mobile);

class Mobile {
    constructor(brand, price, color){
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    getBrand(){
        return this.brand
    }

    setBrand(brand){
        this.brand = brand;
    }

    getPrice(){
        return this.price
    }

    setPrice(price){
        this.price = price;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    printSpecification(){
        let spec = `BRAND : ${this.getBrand()}
                    PRICE : ${this.getPrice()}
                    COLOR : ${this.getColor()}`;
        console.log(spec);
    }
};

let mobile = new Mobile('Apple', 35000, 'Silver');
mobile.printSpecification();

mobile.setPrice(45000);
mobile.printSpecification();
