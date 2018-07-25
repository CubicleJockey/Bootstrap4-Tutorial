function formSubmit(){

    let emailElement = document.getElementById('email');
    let email = emailElement.value;

    if(email === undefined || email === null || email === ''){
        alert('No email was provided.');
        return false;
    }

    let passwordElement = document.getElementById('password');
    let password = passwordElement.value;

    if(password === undefined || password === null || password === ''){
        alert('No password was provided.');
        return false;
    }

    let checkboxElement = document.getElementById('rememberMe');


    alert(`From was submitted with Email: [${email}] and Password: [${password}]. Remember Me: [${checkboxElement.value}.]`);

    <!-- This is a demo cancel form submit -->
    return false;
}