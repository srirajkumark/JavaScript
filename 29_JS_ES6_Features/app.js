/* 
ES6 / ES-2015 Features
----------------------

1) Template Strings(`) back tick operator
2) Optional Parameters
3) Arrow Functions
4) for-of Loops
5 Destructuring
6) Spread Operator
*/



// 1) Template Strings(`) back tick operator
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};

// Old ES5 Model:
let msg = "BRAND : " + mobile.brand + " COLOR : " + mobile.color + " PRICE : " + mobile.price;
console.log(msg);

// New ES6 Model:
let msg1 = `BRAND : ${mobile.brand} COLOR : ${mobile.color} PRICE : ${mobile.price}`;
console.log(msg1);


// =======================
// Template Model:

// Old ES5 Model:
let template1 = "<ul>" + 
                    "<li>" + mobile.brand + "</li>" +
                    "<li>" + mobile.color + "</li>" +
                    "<li>" + mobile.price + "</li>" +
                "</ul>";

// New ES6 Model:
let template2 = `<ul>
                    <li>${mobile.brand}</li>
                    <li>${mobile.color}</li>
                    <li>${mobile.price}</li>
                </ul>`;


// 2) Optional Parameters:

// Old ES5 Model:
// let greet = function(name, age){
//     if(age === undefined){
//         age = 30;
//     }
//     let msg = `Hello ${name}. You are ${age} years old`;
//     console.log(msg);
// };
// greet('John', 40);


// New ES6 Model:
let greet = function(name, age=30){
    let msg = `Hello ${name}. You are ${age} years old`;
    console.log(msg);
};
greet('John', 40);


let printNumbers = function(startNumber, endNumber=10){
    let result = '';
    for(let i = startNumber; i<=endNumber; i++){
        result += `${i} `;
    }
    console.log(result);
};
printNumbers(1, 20);