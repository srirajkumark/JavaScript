// Coding Examples Part-1 *********

console.log('JS');

// 1. find the number of 'o's in the given string
let msg = 'Good Morning';
let findZeroes = (str) => {
    let count = 0;
    for(let i=0; i<=str.length-1; i++){
        let char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`The Zeroes in string is ${findZeroes(msg)}`);


// 2. find the reverse string of the given string
msg = 'Good Morning';
let reverseString = (str) => {
    let tempString = '';
    for(let i=str.length-1; i>=0; i--){
        let char = str.charAt(i);
        tempString += char;
    }
    return tempString;
};
console.log(`${msg} => ${reverseString(msg)}`);


// 3. check the given string is palindrome or not
msg = 'ABA';
let isPalindrome = (str) => {
    return (str === reverseString(str));
};
console.log(`${msg} is Palindrome ? ${isPalindrome(msg)}`);

// Coding Examples Part-2 *********

/*
To create a triangle strings:
str = Good
G     -> str.substr(0, 1)
Go    -> str.substr(0, 2)
Goo   -> str.substr(0, 3)
Good  -> str.substr(0, 4)

i=1; i<=str.length; i++
*/

// 4. Triange String One
msg = 'SRIRAJ KUMAR';

let triangleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length; i++){
        tempStr += `${str.substr(0, i)} \n`
    }
    return tempStr;
};
console.log(triangleOne(msg));

/* 
str = Good

Good -> str.substr(0)
 ood -> str.substr(1)
  od -> str.substr(2)
   d -> str.substr(3)

i=0; i<=length-1; i++
*/

// 5. Triange String Two
msg = 'SRIRAJ KUMAR';

let addSpace = (numb) => {
    let tempSpace = '';
    for(let i=0; i<numb; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<=str.length-1; i++){
        tempStr += `${addSpace(i)} ${str.substr(i)} \n`
    }
    return tempStr;
};
console.log(triangleTwo(msg));

/* 
str = Good

Good -> str.substr(0, 4)
Goo  -> str.substr(0, 3)
Go   -> str.substr(0, 2)
G    -> str.substr(0, 1)

i=4(length), i>=1; i--
*/

// 6. Triange String Three
msg = 'SRIRAJ KUMAR';

let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1; i--){
        tempStr += `${str.substr(0, i)} \n`
    }
    return tempStr;
};
console.log(triangleThree(msg));

/* 
str = Good

   d -> str.substr(3)
  od -> str.substr(2)
 ood -> str.substr(1)
Good -> str.substr(0)

i = length-1; i>=0; i--
*/

// 7. Triange String Four
msg = 'SRIRAJ KUMAR';

let addSpc = (numb) => {
    let tempSpace = '';
    for(let i=numb; i>0; i--){
        tempSpace += ' ';
    }
    return tempSpace;
};

let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += `${addSpc(i)} ${str.substr(i)} \n`
    }
    return tempStr;
};
console.log(triangleFour(msg));
