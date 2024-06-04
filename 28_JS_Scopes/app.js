// JS Scopes 
// => Scope is nothing but a boundary, the accessibility area of a variable.

// 1)Block Scope
// Ex: statement block, if, for, switch, while 
// (only accessible inside a block)

// 2)Function Scope
// Ex: functions, arrow function etc 
// (only accessible inside a function)



// ==================================

// let a = 10;
// let b = 50;
// {
//     let b = 20;
// }
// console.log(b);


// ==================================



// let a = 10;

// {
//     let a = 20;
//     {
//         let a = 30;
//         {
//             let a = 40;
//         }
//     }
// }
// console.log(a);


// ==================================


let a = 10;

{
    let a = 20;
    {
        // let a = 30;
        {
            // let a = 40;
            console.log(a);
        }
    }
}

// Block Scope

let course = 'Engneering';
if(course === 'Engineering'){
    let dept = 'Software';
}

console.log(course);