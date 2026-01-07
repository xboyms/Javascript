//Assigning new variables to contact form inputs and buttons
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");
const submit = document.getElementById("submit");
const reset = document.getElementById("clear");
const firstnameInvalid = document.getElementById("firstnameInvalid");
const lastnameInvalid = document.getElementById("lastnameInvalid");
const emailInvalid = document.getElementById("emailInvalid");
const messageCounter = document.getElementById("messageCounter");
const counter = document.getElementById("counter");
const subjectErrorMsg = document.getElementById("subjectErrorMsg");
const successMsg = document.getElementById("thanks");
const userName=document.getElementById("userFirstName");
//Checks for input for name fields
function validateInput(inputField, errorMessage) {

    //Checks for letters between a-z both low and high without spaces
    const onlyLetters = /^[a-zA-Z]*$/.test(inputField.value);
    const isEmpty = inputField.value.length === 0;

    let nameIsValid = onlyLetters && !isEmpty;

    // Checks if input field has special characters or spaces
    if (!nameIsValid) {
        errorMessage.style.opacity = '100%';
        inputField.style.borderColor = 'red';
    }
    //If the above condition is not met, fields turn green without error messages
    else {
        errorMessage.style.opacity = '0';
        inputField.style.borderColor = 'green';
    }
    return nameIsValid;
}

//Calls function and chooses relevant parameters
firstname.addEventListener("input", () => validateInput(firstname, firstnameInvalid));
//Blur checks if user tries to tab through fields or select & leave empty
firstname.addEventListener("blur", () => validateInput(firstname, firstnameInvalid));

lastname.addEventListener("input", () => validateInput(lastname, lastnameInvalid));
lastname.addEventListener("blur", () => validateInput(lastname, lastnameInvalid));

//Checks email input validity
function validateEmail(inputField, errorMessage) {
    //Define what empty field variable
    const isEmpty = email.value.length === 0;
    //Define valid email variable and check for a match
    const validEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]+$/.test(inputField.value);
    //Prevents user from typing space
    email.value = email.value.replace(/\s/g, "");

    /*If either input field is left empty or email input is not valid
    border color becomes red and error message shows*/

    if (isEmpty || !validEmail) {
        errorMessage.style.opacity = '100%';
        inputField.style.borderColor = 'red';
    }
    /*If the above condition is not fulfilled then border color
    turns green and error message disappears*/
    else {
        errorMessage.style.opacity = '0';
        inputField.style.borderColor = 'green';
    }
}

//Ensures the input field is neither left empty & has valid input
email.addEventListener("blur", () => validateEmail(email, emailInvalid));
email.addEventListener("input", () => validateEmail(email, emailInvalid));

/*Optional function to make button unclickable if
1. All fields are empty
2. All fields are filled
3. Else turn off submit and turn on reset
*/

function validateMessage() {
    messageCounter.style.opacity = '1';
    counter.style.opacity = '1';

    counter.textContent = message.value.length;

    if (message.value.length >= 20) {
        messageCounter.style.color = 'green';
        counter.style.color = 'green';
    } else {
        messageCounter.style.color = 'red';
        counter.style.color = 'red';
    }
}

message.addEventListener("blur", validateMessage);
message.addEventListener("input", validateMessage);

// function updateButtonState() {
// //Variable for all empty fields
//     const allEmpty = firstname.value.length === 0 &&
//         lastname.value.length === 0 &&
//         email.value.length === 0 &&
//         message.value.length === 0 &&
//         subject.value === "select subject";
//
//     if (allEmpty) {
//         reset.disabled = true;
//         reset.style.pointerEvents = 'none';
//         reset.style.opacity = '0.5';
//
//         submit.disabled = true;
//         submit.style.pointerEvents = 'none';
//         submit.style.opacity = '0.5';
//     } else if (firstname.style.borderColor === 'green' &&
//         lastname.style.borderColor === 'green' &&
//         email.style.borderColor === 'green' &&
//         messageCounter.style.color === 'green' &&
//         subject.style.borderColor === 'green'
//     ) {
//         submit.disabled = false;
//         submit.style.pointerEvents = 'auto';
//         submit.style.opacity = '1';
//     } else {
//         reset.disabled = false;
//         reset.style.pointerEvents = 'auto';
//         reset.style.opacity = '1';
//
//         submit.disabled = true;
//         submit.style.pointerEvents = 'none';
//         submit.style.opacity = '0.5';
//     }
// }
//
// //Checks input of following fields and runs function
// firstname.addEventListener("input", updateButtonState);
// lastname.addEventListener("input", updateButtonState);
// email.addEventListener("input", updateButtonState);
// message.addEventListener("input", updateButtonState);
// subject.addEventListener("change", updateButtonState);
//
// //Calls function to update state of both submit and reset buttons
// updateButtonState();

function showError() {

    const defaultSubject = subject.value;
    if (defaultSubject === "select subject") {
        subject.style.borderColor = 'red';
        subjectErrorMsg.style.opacity = '1';
    } else {
        // If they chose something else, turn it green
        subject.style.borderColor = 'green';
        subjectErrorMsg.style.opacity = '0';
    }
}


subject.addEventListener("blur", showError);
subject.addEventListener("change", showError);

submit.addEventListener("click", (event) => {
    event.preventDefault();
    //Checks if form can be submitted
    userName.textContent = firstname.value;
    if (firstname.value && lastname.value && email.value && subject.style.borderColor === 'green' && message.value.length >= 20) {
        successMsg.style.display = 'block';
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
        clearForm(); // Clear the form after
    } else {
        alert("Please fill in all fields accordingly!");
    }

});

//Adds functionality to clear button
    function clearForm() {
        //Array for all input fields and error messages
        const allFields = [firstname, lastname, email, message, subject];
        const allErrors = [firstnameInvalid, lastnameInvalid, emailInvalid, messageCounter, subjectErrorMsg];

        //forEach loops and applies the following for each element between
        allFields.forEach(inputField => {

            if (inputField === subject) {
                inputField.value = "select subject";
            } else {
                inputField.value = '';
            }
            inputField.style.borderColor = '';
        });

        allErrors.forEach(errorMessage => {
            errorMessage.style.opacity = '0';
        });

        // updateButtonState();
    }

//Calls function on click
    reset.addEventListener("click", () => clearForm());

