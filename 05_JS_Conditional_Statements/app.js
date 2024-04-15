
// if-else:

let time = 10;
let wishMessage = '';
if(time >= 0 && time <= 12){
    wishMessage = 'Good Morning';
}
else if(time > 12 && time <=  17){
    wishMessage = 'Good Afternoon';
}
else if (time > 17 && time <= 23){
    wishMessage = 'Good Evening';
}
else {
    wishMessage = 'Enter a proper Time';
}

console.log(wishMessage);


// switch statement:

let day = new Date().getDay();
console.log(day);

let today = '';
switch(day){
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednesday';
        break;
    case 4:
        today = 'Thursday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 6:
        today = 'Saturday';
        break;
    default:
        today = 'Enter a Proper Day';
        break;
}

console.log(`Today is : ${today}`);


