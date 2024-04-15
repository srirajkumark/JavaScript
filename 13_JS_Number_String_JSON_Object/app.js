// Number related operations

// Max Number
console.log(Number.MAX_SAFE_INTEGER);

// Min Number
console.log(Number.MIN_SAFE_INTEGER);

// Positive Infinity
console.log(Number.POSITIVE_INFINITY);

// Negative Infinity
console.log(Number.NEGATIVE_INFINITY);

// Parse Int
let str1 = '100.145';
console.log(typeof str1);
let num1 = Number.parseInt(str1);
console.log(typeof num1);
console.log(num1);
console.log(`${typeof str1} =>> ${typeof num1}`);

// Parse Float
let str2 = '100.145';
console.log(typeof str2);
let num2 = Number.parseFloat(str2);
console.log(num2);
console.log(`${typeof str2} =>> ${typeof num2}`);

// toString Function
let num3 = 100;
let numStr = num3.toString();
console.log(`${typeof num3} =>> ${typeof numStr}`);

// toFixed
let amount = 520;
console.log(amount.toFixed(2));


// String Related Operations

let msg = String('Good Morning');

// length
console.log(msg.length);

// lowercase
console.log(msg.toLowerCase());

// uppercase
console.log(msg.toUpperCase());

// sub string -->> substring(start index, no of chars) 
// Note: substr() is depricated in latest JS
console.log(msg.substring(0, 4)); //Good
console.log(msg.substring(5, 10)); //Morni
console.log(msg.substring(5)); //Morning

// charAt
console.log(msg.charAt(5)); //M -> will give single character at index

// charCodeAt (ASCII Code No)
console.log(msg.charCodeAt(5)); //77


// JSON Object *****

/*
    String => Object : parse()
    Object => String : stringify()
*/

let student = {
    name : 'Raj',
    age : 20,
    course : 'CSE',
    college : 'IIT Hyderabad'
};
console.log(student);

// Object to String
let studentStr = JSON.stringify(student);
console.log(studentStr);

// String to Object
let newStudent = JSON.parse(studentStr);
console.log(newStudent);
