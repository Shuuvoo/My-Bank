// step-1: add click event handeler nwith the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //   step-2: get thre email address inside the email input field
    // always remember to use  .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email)
    // step-3: get Password 
    // step-3.1: set id on the html element 
    // step-3.2: get the element
    // step-3.1: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password)
    // Do not verify email pasword this method
    // step-4: verify email and password
    if(email ==='shuvo@hotmail.com' && password === 'shuvo'){
        window.location.href = 'bank.html';
    }
    else{
        alert ('tui monu kada re')
    }

})