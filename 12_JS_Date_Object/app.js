// date object
let date = new Date();
console.log(date);

// proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// usa date
let options = {timeZone : 'America/New_York'};
let usaDate = new Date().toLocaleDateString('en-US', options);
console.log(usaDate);

// usa time
options = {timeZone : 'America/New_York'};
let usaTime = new Date().toLocaleTimeString('en-US', options);
console.log(usaTime);

// today
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

// Month
let currentMonth = new Date().getMonth();
console.log(currentMonth);

// custom Date
let c_date = new Date().getDate();
let c_month = new Date().getMonth() + 1;
let c_year = new Date().getFullYear();
console.log(`${c_date}-${c_month}-${c_year}`);
console.log(`${c_date}.${c_month}.${c_year}`);
console.log(`${c_date}/${c_month}/${c_year}`);
