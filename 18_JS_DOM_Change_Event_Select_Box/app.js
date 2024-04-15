// change event on select box

let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change', function(){
    let selectedOption = selectBox.value;
    let langOptionEle = document.querySelector('#lang-option');
    langOptionEle.innerText = selectedOption;
});
