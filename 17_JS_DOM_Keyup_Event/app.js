// Keyup event example

let textBox = document.querySelector('#username');
textBox.addEventListener('keyup', function(){
    let textEntered = textBox.value;
    let msgElement = document.querySelector('#msg');
    msgElement.innerText = textEntered;
});