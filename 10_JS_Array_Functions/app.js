// Functions of Arrays

// Shift() -> remove the first element from array
console.log('--------------------------shift()-------------------------')
let technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unshift() -> add the first element to array
console.log('--------------------------unshift()-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.unshift('nodejs');
console.log(technologies);

// push() -> add the last element to array
console.log('--------------------------push()-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.push('nodejs');
console.log(technologies);

// pop() -> removes the last element from array
console.log('--------------------------pop()-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// sort() -> to sort the array in ascending order
console.log('--------------------------sort()-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// sort() -> to reverse the array elements
console.log('--------------------------reverse()-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// descending order
console.log('--------------------------descending order-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// splice(index) -> it removes all the elements from the given index
console.log('--------------------------splice(index)-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

// splice(index, no-of-elements) -> it removes the given no of elements from the given index
console.log('--------------------------splice(index, no-of-elements)-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(2, 1);
console.log(technologies);

// splice(index, no-of-elements) -> it removes the given no of elements from the given index
console.log('--------------------------splice(index, no-of-elements)-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(2, 1);
console.log(technologies);

// splice(index, 1, replace-of-element) -> it replaces the given element at the given index
console.log('--------------------------splice(index, 1, replace-of-element)-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(2, 1, 'node.js');
console.log(technologies);
technologies.splice(4, 1, 'react.js');
console.log(technologies);

// join() -> to join the array elements to string
console.log('--------------------------join()-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
let techString = technologies.join(' - ');
console.log(techString);

// split() -> to split a string to an array
console.log('--------------------------split()-------------------------')
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(techString);
let newTechString = techString.split(' - ');
console.log(newTechString);

// Filter() -> to filter the certain element
console.log('--------------------------filter()-------------------------')

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
        age : 44,
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
console.log(employees);
let jrEmployees = employees.filter(function(employee){
    return employee.age <= 30;
});
console.log(jrEmployees);

// Active Employees
console.log(employees);
let actEmployees = employees.filter(function(employee){
    return employee.isActive;
});
console.log(actEmployees);

