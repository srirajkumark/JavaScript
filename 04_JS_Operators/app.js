// JavaScript Operators

// Assignment Operators: =

let test = 10;
console.log(test);

// Arithmetic Operator: + - / * %

let num1 = 10;
let num2 = 20;
console.log(`sum: ${num1 + num2}`);
console.log(`sum: ${num1 - num2}`);
console.log(`sum: ${num1 * num2}`);
console.log(`sum: ${num1 / num2}`);

// find the number is even or odd
let number = 12;
if(number % 2 === 0) {
    console.log(`${number} is an Even Number`);
}
else {
    console.log(`${number} is an Odd Number`);
}


// Short Hand math Operator: += -= /= *=

let a = 20;
let b = 30;
let add = 10;
add = add + (a + b); // 10 + 20 + 30 => 60
console.log(add);  

add += (a + b); // 60 + 20 + 30 => 110
console.log(add);


// Conditional Operators: < , > , <= , >= , !==

let marks = 75;
if(marks <= 35) {
    console.log('You Failed the Exam');
}
else {
    console.log('You Cleared the Exam');
}


// Unary Operators: ++ , --

// Increment or decrement by 1 value

let x = 10;
x = x + 1;

x += 1;

x++;

x--;

console.log(x);


// Logical Operators : && , || , ^

// AND => T && T -> T
// OR => F || F -> F


// AND example:

let inRelation = true;
let parentsAgreed = false;

if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents agreed');
}

// Ternary Operator: ?:

// Syntax: (condition) ? true : false;

let score = 65;
let semResult = '';
(score <= 35) ? semResult = 'You Failed in Sem' : semResult = 'You Cleared the Sem';
console.log(semResult);

// Equality Operator: == , ===

let m = 10;
let n = '10';
if(m === n) {
    console.log('Both are Equal');
}
else{
    console.log('Both are Not Equal');
}

// For ==, first type conversion happens and later it compares type
// For ===, no conversion happens, it will directly compare the type
