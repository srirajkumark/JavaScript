// It is a block of statementa which taken in a set of parameters and does someprocess and returns the result.
//  Re-usability

// print from 0-10 with diff 1



function printNumbers(){
    let result = '';
    for(let i=0; i<10; i++){
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(); //function call/execution


function printNumbers(endNumber){
    let result = '';
    for(let i=0; i<endNumber; i++){
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(50); //function call/execution

function printNumbers(startNumber , endNumber){
    let result = '';
    for(let i=startNumber; i<endNumber; i++){
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(10, 50); //function call/execution

function printNumbers(startNumber, endNumber, increment){
    let result = '';
    for(let i=startNumber; i<endNumber; i+=increment){
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(10, 50, 5); //function call/execution
printNumbers(100, 500, 50);


// Tutorial - 19 :-

// Function without Parameters:
function greet(){
    console.log('Good Morning');
}
greet();

// Funtion Expression:
let greetMe = function(){
    console.log('Good Afternoon');
};
console.log(greetMe);
greetMe();

// Function with parameters
let wishMe = function(name, age){
    let message = `Hello ${name}, You are ${age} years old.`;
    console.log(message);
};
wishMe('John', 40);

// Function with return Type
let sum = function(a, b){
    let result = 2 * (a + b);
    return result;
}
let output = sum(10, 20);
console.log(output);

// Tutorial - 20 :- Complex Functions

// Function with an object as parameter
let printObject = function(obj) {
    console.log(obj);
};
printObject({name: 'Rajan', age: 20});

let mobile = {
    brand: 'Apple',
    color: 'Silver',
    price: 85000
};

printObject(mobile);

// Function with an array as a parameter

let printArray = function(array){
    let result = '';
    for (let index in array){
        result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
    }
    console.log(result);
};
printArray([10, 20, 30, 40]);

let colors = ['white', 'black', 'purple', 'red'];
printArray(colors);

// Function inside an object

let student = {
    firstName: 'Sriraj',
    lastName: 'Naidu',
    fullName: function(){
        return 'Sriraj Naidu';
    }
};
console.log(student.fullName());

let person = {
    firstName: 'Sriraj',
    lastName: 'Naidu',
    fullName: function(){
        return `${this.firstName} ${this.lastName} `;
    }
};
console.log(person.fullName());

// Nested function

let outerFn = function(){
    console.log('Iam an Outer Function');
    let innerFn = function(){
        console.log('Iam an Inner Function');
    }
    innerFn();
};
outerFn();

// Twisted Function
let twistedFn = function(){
    let person = 'John';
    let printStudent = function(){
        let student = {
            name : 'Rajan',
            age : 20,
            course : 'CSE'
        };
        return student;
    }
    return printStudent;
};

let innerFnction = twistedFn();
let studentObj = innerFnction();

console.log(studentObj);
console.log(studentObj.name);


// Tutorial-21:-
// Prepare a chicken curry using functions
let glassBowl = function(rawChicken, masala){
    // marinating the chicken
    let marinatedChicken = `MIXING : (${rawChicken} + ${masala})`;
    return marinatedChicken;
};

let cookingBowl = function(marinatedChicken, water){
    // cooking logic
    let cookedChicken = `COOKING : (${marinatedChicken} + ${water})`;
    return cookedChicken;
};

let eatingPlate = function(cookedChicken, rice){
    // eating logic
    let eating = `EATING : (${cookedChicken} + ${rice})`;
    console.log(eating);
};

let rawChicken = '3Kg Chicken';
let masala = 'Garlic, Ginger, Pepper, Salt';
let marinatedChicken = glassBowl(rawChicken, masala);
let water = '1Ltr Water';
let cookedChicken = cookingBowl(marinatedChicken, water);
let rice = '1Kg Cooked Rice';
eatingPlate(cookedChicken, rice);

