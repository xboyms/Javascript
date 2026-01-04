//Assigning new variables to contact form inputs and buttons
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const subject = document.getElementById("subject");
const submit = document.getElementById("submit");
const reset = document.getElementById("clear");
const firstnameInvalid = document.getElementById("firstnameInvalid");
const lastnameInvalid = document.getElementById("lastnameInvalid");

//Checks for input for name fields
function validateInput(inputField, errorMessage) {

    //Checks for letters between a-z
    const onlyLetters = /^[a-zA-Z]*$/.test(inputField.value);
    const isEmpty = inputField.value.length === 0;

    if (!onlyLetters || isEmpty) {
        errorMessage.style.opacity = '100%';
        inputField.style.borderColor = 'red';
    } else {
        errorMessage.style.opacity = '0';
        inputField.style.borderColor = 'green';
    }
}

//Calls function and chooses relevant parameters
firstname.addEventListener("input", () => validateInput(firstname, firstnameInvalid));
//Blur checks if user tries to tab through fields or select & leave empty
firstname.addEventListener("blur", () => validateInput(firstname, firstnameInvalid));

lastname.addEventListener("input", () => validateInput(lastname, lastnameInvalid));
lastname.addEventListener("blur", () => validateInput(lastname, lastnameInvalid));

function clearForm() {
    const allFields = [firstname, lastname];
    const allErrors = [firstnameInvalid, lastnameInvalid];

    allFields.forEach(inputField => {
        inputField.value = '';
        inputField.style.borderColor = '';
    });

    allErrors.forEach(errorMessage => {
        errorMessage.style.opacity = '0';
    });
}

reset.addEventListener("click", () => clearForm());