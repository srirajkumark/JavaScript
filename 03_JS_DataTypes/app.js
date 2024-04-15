// DataTypes

// string

let employeeName = 'John';
console.log(employeeName);
console.log(typeof employeeName);
console.log(`Value: ${employeeName} Type: ${typeof employeeName}`);

// number
let employeeAge = 30;
console.log(employeeAge);
console.log(typeof employeeAge);
console.log(`Value: ${employeeAge} Type: ${typeof employeeAge}`);

// boolean
let isManager = true;
console.log(isManager);
console.log(typeof isManager);
console.log(`Value: ${isManager} Type: ${typeof isManager}`);

// undefined
let myName; //variable declaration
console.log(myName);
myName = 'Raj'; //assigning a value to variable
console.log(myName);

// null (dummy value)
let test = null;
console.log(`Value: ${test} Type: ${typeof test}`);


// Re-Assignment is allowed

let abc = null;
abc = 10;
abc = 'test'; // Re-Assignment is allowed for variable
console.log(`Value: ${abc} Type: ${typeof abc}`);

