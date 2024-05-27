// Form Validation

let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', function(event){
    event.preventDefault(); //it stops auto form submission

    if(validateForm()){
        alert('Form is submitted successfully');
    }
    else{
        alert('Something went wrong');
    }
});

let validateForm = () => {
    if(checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword()){
        return true;
    }
    else{
        return false;
    }
};

let checkUserName = () => {
    let inputEl = document.querySelector('#username');
    let inputFeedbackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z0-9]{4,14}$/;  //regular expression

    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};


let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#email-feedback');
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};


let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;

    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};

let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#c_password');
    let passwordEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#c_password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;

    if(regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};



// make Valid
let makeValid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText = 'Looks Good';
};

// make Valid
let makeInvalid = (inputEl,inputFeedbackEl) => {
    inputEl.classList.add('is-form-invalid');
    inputEl.classList.remove('is-form-valid');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.innerText = `Please enter a ${inputEl.placeholder}`;
};


// username field with keyup event
let usernameEl = document.querySelector('#username');
usernameEl.addEventListener('keyup', function(){
    checkUserName();
});

// email field with keyup event
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function(){
    checkEmail();
});

// password field with keyup event
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function(){
    checkPassword();
});

// confirm password field with keyup event
let confirmPasswordEl = document.querySelector('#c_password');
confirmPasswordEl.addEventListener('keyup', function(){
    checkConfirmPassword();
});