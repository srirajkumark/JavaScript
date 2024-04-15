let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', function(){
    passwordBox.setAttribute('type', 'text');
});



// getAttribute() -> to get the values
// setAttribute() -> to set the values