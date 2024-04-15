

// let sayGoodMorning = () => {
//     let h1Tag = document.querySelector('#msg-1');
//     h1Tag.innerText = 'Good Morning';
//     h1Tag.style.backgroundColor = 'limegreen';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px black';
// };
// sayGoodMorning();

let printWishMsg = (msg, colr) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = msg;
    h1Tag.style.backgroundColor = colr;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};


// JavaScript Event Listeners *******
/*
1. Get the HTML Element/Tag
2. Attach an event to the Element/Tag
3. Write a function for event handling
*/

// Good Morning Button
let gmBtn = document.querySelector('#gm-btn');
gmBtn.addEventListener('click', function (){
    printWishMsg('Good Morning', 'limegreen');
});

// Good Afternoon Button
let gaBtn = document.querySelector('#ga-btn');
gaBtn.addEventListener('click', function (){
   printWishMsg('Good Afternoon', 'orangered');
});

// Good Evening Button
let geBtn = document.querySelector('#ge-btn');
geBtn.addEventListener('click', function (){
   printWishMsg('Good Evening', 'purple');
});

// Good Night Button
let gnBtn = document.querySelector('#gn-btn');
gnBtn.addEventListener('click', function (){
   printWishMsg('Good Night', 'black');
});


