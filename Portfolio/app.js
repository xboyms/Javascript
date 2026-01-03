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


/*This function checks for 2 thing: if the input field is left empty or only has 1 character
then it shows an error message */
function validateEmpty(inputField, errorMessage) {
    if (inputField.value.length <= 1) {
        errorMessage.style.display = 'block';
        inputField.style.borderColor = 'red';
    } else {
        errorMessage.style.display = 'none';
        inputField.style.borderColor = 'green';
    }
}

//Calling the function above using blur event
// Replacing the placeholder variables to target the right input fields / variables
firstname.addEventListener("blur", () => validateEmpty(firstname, firstnameInvalid));
lastname.addEventListener("blur", () => validateEmpty(lastname, lastnameInvalid));

