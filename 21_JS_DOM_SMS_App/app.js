// SMS App
let textAreaEl = document.querySelector('#text-area');
let charCountEl = document.querySelector('#char-count');
textAreaEl.addEventListener('keyup', function(){
    let textLength = textAreaEl.value.length;
    charCountEl.innerText = textLength;
});
