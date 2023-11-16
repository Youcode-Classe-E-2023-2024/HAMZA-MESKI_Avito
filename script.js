const signupParent = document.getElementById('sign-up-parent');
const loginParent = document.getElementById('log-in-parent');
// sign-up LOGIC:
const signUpForm = document.getElementById('sign-up-form');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
const confirmPassword = document.getElementById('confirm-password');

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // xml for create dataBase and table if they are not exist
    const xhr0 = new XMLHttpRequest(); 
    xhr0.open('GET', 'createDB.php', true);
    xhr0.send();
    xhr0.addEventListener('load', function() {

        const xhr1 = new XMLHttpRequest();
        xhr1.open('POST', 'sign-up.php', true);
        const formData = new FormData(signUpForm);
        xhr1.send(formData);
        xhr1.addEventListener('load', function() {
            console.log(this.responseText);
            if (this.responseText == 'Email Already Exist') {
                alert('Email Already Exist');
            }else if(this.responseText == 'not the same password') {
                alert('not the same password');
            }
            else {
                signupParent.classList.toggle('Hidden');
                loginParent.classList.toggle('Hidden');
            }
        })
    })
})

// log-in LOGIC:
const logIn = document.getElementById('log-in-form');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');

logIn.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const xhr2 = new XMLHttpRequest(); 
    xhr2.open('POST', 'log-in.php', true); 
    const formData = new FormData(logIn);
    xhr2.send(formData);
    xhr2.addEventListener('load', function() {
        if (this.responseText == 'Successfull') {
            loginParent.classList.toggle('Hidden');
        }else {
            alert('Not Valid Email/Password');
        }
    })
})

// add-button LOGIC: 
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', function() {
    
})