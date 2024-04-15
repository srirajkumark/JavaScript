// ********While Loop********



// Print the Values from 0-10 diff by 1
let result = '';
let i = 0;
while(i <= 10) {
    if(i <= 9) {
        result += `${i}, `;
    }
    else {
        result += `${i}`;
    }
    i++;
}

console.log(result);


// Print the Values from 20-0 diff by 2
let result1 = '';
let j = 20; 
while(j >= 0) {
    if(j > 0){
        result1 += `${j}, `;
    }
    else {
        result1 += `${j}`;
    }
    j -= 2;
}
console.log(result1);


// Star pattern like right angle triangle

let number = 5;
response = '';
m = 1;
while ( m <= number){
    for (let n = 1; n <= m; n++){
        response += `* `;
    }
    response += `\n`;
    m++;
}
console.log(response);

// Only sing while star pattern

let number1 = 5;
response1 = '';
m1 = 1;
while ( m1 <= number1){
    let n1 = 1;
    while (n1 <= m1){
        response1 += `* `;
        n1++;
    }
    response1 += `\n`;
    m1++;
}
console.log(response1);


// Same like star pattern print 12345 like right angle triangle (1, 12, 123, 1234, 12345 line by line)

let number3 = 5;
response3 = '';
let o = 1;
while( o <= number3){
    let p = 1;
    while(p <= o) {
        response3 += `${p} `;
        p++;
    }
    response3 += `\n`;
    o++;
}
console.log(response3);

