// setInterval() -> to keep on repeated number of times
// setTimeout() -> to call the function after given number of time.
// clearInterval() -> to clear the interval which is created by setInterval.


let count = 0;
let interval = 0;
let greet = () => {
    count++;
    console.log(`Hello, Welcome to JS : ${count}`);
    console.log(new Date().toLocaleTimeString());
};

interval = setInterval(greet, 1000);

console.log(new Date().toLocaleTimeString());

setTimeout(()=> {
    clearInterval(interval);
}, 5000);

