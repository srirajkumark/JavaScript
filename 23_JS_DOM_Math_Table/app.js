// Math Table

let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function(){
    let theNumber = Number(numberEl.value);
    document.querySelector('#number').innerText = theNumber;
    calculate();
});

let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input', function(){
    let selectedMultiplier = Number(rangeEl.value);
    document.querySelector('#multi').innerText = selectedMultiplier;
    calculate();
});

// calculate

let calculate = () => {
    let finalNumber = Number(document.querySelector('#number').innerText);
    let finalMultiplier = Number(document.querySelector('#multi').innerText);
    let mathResult = finalNumber * finalMultiplier;
    document.querySelector('#result').innerText = mathResult;
};