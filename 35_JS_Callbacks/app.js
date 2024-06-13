// 1)Callback function
// -------------------

// Normal Program:-
// let calculate = (a, b, operaton) => {
//     let result = '';
//     if (operaton === 'sum'){
//         result = a + b;
//     }
//     if (operaton === 'mul'){
//         result = a * b;
//     }
//     return result; 
// };

// let output = calculate(10, 20, 'sum');
// console.log(output);

// output = calculate(10, 20, 'mul');
// console.log(output);



// Using Callback:-
let sum = (a, b) => {
    return a + b;
};

let mul = (a, b) => {
    return a * b;
};

let calculate = (a, b, callback) => {
    let result = '';
    return callback(a, b);
};

let output = calculate(10, 20, sum);
console.log(output);

output = calculate(10, 20, mul);
console.log(output);

output = calculate(10, 20, (a, b) => {
    return a - b;
});
console.log(output);





// Realtime use of callback function:

let employee = [{id : 1, name : 'John', age : 35},
                {id : 2, name : 'Rajan', age : 25}
];

let createEmployee = (employee) => {
    setTimeout(() => {
        employees.push(employee);
    }, 2000);
};

let getEmployees = () => {
    setTimeout(() => {
        let employeeRows = '';
        employees.foreach((employee) => {
            employeeRows += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                             </tr>`
        });
        document.querySelector('#table-body').innerHTML = employeeRows;
    }, 1000);
};

createEmployee({id : 3, name : 'Wilson', age : 45});
getEmployees();