// ********For Loop********

// Print the Values from 0-10 diff by 1

for(i=0;i<=10;i++){
    console.log(i);
}

let result = '';
for(j=0;j<=10;j++){

    if(j<=9){
        result += `${j} , `;
    }
    else {
        result += `${j}`;
    }
    
}

console.log(result);


// Print the Values from 20-0 diff by 2

resultNew = '';
for(r=20; r>=0; r-=2){
    if(r>0){
        resultNew += `${r} , `;
    }
    else {
        resultNew += `${r}`;
    }
}

console.log(resultNew);

// Nested For Loop(For Loop inside For Loop)
// Star pattern like right angle triangle

let number = 5;
response = '';
for (let m = 1; m <= number; m++){
    for (let n = 1; n <= m; n++){
        response += `* `;
    }
    response += `\n`;
}
console.log(response);

// Same like star pattern print 12345 like right angle triangle (1, 12, 123, 1234, 12345 line by line)

let number1 = 5;
response = '';
for (let o = 1; o <= number; o++){
    for (let p = 1; p <= o; p++){
        response += `${p} `;
    }
    response += `\n`;
}
console.log(response);