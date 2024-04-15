// Object is a real world entity.

let camera = {
    brand: 'Canon',
    price: '35000',
    color: 'Black',
    mfg: 2024
};

console.log(camera);
console.log(camera.brand);
console.log(camera.price);
console.log(camera['mfg']);

// for dynamic properties of dot and brackets []

let prop = 'brand';
console.log(camera[prop]);

// Nested object

let student = {
    name : 'Arjun',
    age : 23,
    course : 'MBBS',
    address : {
        street : 'Road No 32',
        area : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'Telangana'
    }
};

console.log(student);
console.log(student.address);

// access the properties of an object

console.log(student.address.street);



// CRUD Operations with an Object

// create Operation
let mobile = {};
mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = '85000';
mobile.isInsured = false;
console.log(mobile);

// Read Operation
console.log(mobile.brand);

// Update Operation
console.log(mobile.price);
mobile.price = '99000';
console.log(mobile);

// Delete Operation
delete mobile.isInsured;
console.log(mobile);
