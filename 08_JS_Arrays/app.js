// An Indexed collection of elements is called as an Array.

let numbers = [10, 20, 30];
console.log(numbers);

// access the elements of an array
console.log(numbers[1]);

// access the non existing elements of an array
console.log(numbers[3]);

// Iteration of array elements ****************

let colors = ['white', 'black', 'silver', 'red', 'blue', 'yellow'];

// 1. Using a normal For loop

let result = '';
for (let i = 0; i <= colors.length-1; i++){
    result += `${colors[i]} `;
}
console.log(result);

// 2. for-in loop upto ES5
result = '';
for(let index in colors) {
    result += `${colors[index]} `;
}
console.log(result);

// 3. for-of loop in ES6
result = '';
for(let color of colors) {
    result += `${color} `;
}
console.log(result);

// 4. forEach function upto ES5

result = '';
colors.forEach(function(color){
    result += `${color} `;
});
console.log(result);

// 5. forEach with Arrow function from ES6***
result = '';
colors.forEach((color)=>{result += `${color} `;});
console.log(result);

// Array of Objects************
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

// Access employees:
console.log(employees);
console.log(employees[0]);
console.log(employees[0].name);

// iterate employees:
result = '';
for(let employee of employees){
    result += `${employee.name} `;
}
console.log(employees);

// Filter the junior employees:
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// Filter the active employees: isActive : true:
let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);