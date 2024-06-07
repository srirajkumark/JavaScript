/* 
ES6 / ES-2015 Features
----------------------

1) Template Strings(`) back tick operator
2) Optional Parameters
3) Arrow Functions
4) for-of Loops
5) Destructuring
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



// 3) Arrow Functions:
/*
    Function Types:
    1) Normal Function
    2) Function Expression
    3) Arrow Function
*/

// 1) Normal Function
let result = '';
function printNumberNF() {
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
};
result = printNumberNF();
console.log(result);

// 2) Function Expression
let printNumberFE = function(){
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
};

resultFE = printNumberFE();
console.log(resultFE);


// 3) Arrow Function
let printNumberAF = () => {
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
};
resultAF = printNumberFE();
console.log(resultAF);

// Usage of Arrow Function
let employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 4,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 4,
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Software Engineer',
        isActive : true
    }

];

// Junior Employees
let juniorEmployees = employees.filter(function(employee){
    return employee.age <= 30;
});
console.log(juniorEmployees);

// Junior Employees with Arrow Function
let jrEmployees = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(jrEmployees);

// Above arrow function in more simplifed way
let jrEmp = employees.filter(employee => employee.age <= 30);
console.log(jrEmp);

// Limitations of Arrow Function
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`
    }
};
console.log(student.fullName());
// For the above example, this keyword will not look for current object in Arrow Function, so we should not use it in these scenarios.
// But we can use it in below example by using object name.

let student1 = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : () => {
        return `${student1.firstName} ${student1.lastName}`
    }
};
console.log(student1.fullName());


// 4) for-of Loop:

employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 4,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 4,
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Software Engineer',
        isActive : true
    }

];

// Normal - for loop
let result1 = '';
for(let i=0; i<=employees.length-1; i++){
    let employee = employees[i];
    result1 += `${employee.name.toUpperCase()} `;
};
console.log(result1); 

// for-in loop upto ES5
let result2 = '';
for(let index in employees){
    let employee = employees[index];
    result2 += `${employee.name.toUpperCase()} * `;
};
console.log(result2);

// for-of loop from ES6
let result3 = '';
for(let emp of employees){
    result3 += `${emp.name.toUpperCase()} + `;
};
console.log(result3);

// forEach Function ES5
let result4 = '';
employees.forEach(function(employee){
    result4 += `${employee.name.toUpperCase()} & `;
});
console.log(result4);

// forEach with Arrow Function ES6
let result5 = '';
employees.forEach(employee => {
    result5 += `${employee.name.toUpperCase()} $ `;
});
console.log(result5);


// 5) Destructuring: ES6 
let person = {
    name : 'Arjun Reddy',
    age : 24,
    course : 'MS',
    address : {
        street : '100 Feet Road',
        city : 'Hyderabad',
        state : 'TS'
    },
    hobbies : {
        regular : {
            id : 1,
            regHobbies : ['Reading Books', 'Playing Cricket']
        },
        occasional : {
            id : 1,
            occHobbies : ['Swimming', 'Online Games']
        }
    }
};

// Destructuring Examples
let {street, city, state} = person.address;
console.log(`STREET : ${street} CITY : ${city} STATE : ${state}`);

let {regHobbies} = person.hobbies.regular;
console.log(regHobbies);

// 6) Spread Operator:
// (...) to spread array elements as functional parameters.
let numbers = [10, 58, 98];