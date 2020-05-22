
const form = document.querySelector(".siginup-input-form");
const f_name = document.getElementById("f-name");
const l_name = document.getElementById("l-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

function inputCheck() {
    isEmpty(f_name);
    isEmpty(l_name);
    isValidEmail();
    isEmpty(password);
    if (!f_name.classList.contains("error-input")
        && !l_name.classList.contains("error-input")
        && !email.classList.contains("error-input")
        && !password.classList.contains("error-input")) {
        form.submit();
    }

}

function isEmpty(element) {
    if (element.value !== null && element.value !== '') {
        removeError(element);
        return false;
    } else {
        const msg = element.placeholder + " cannot be empty";
        displayError(element, msg);
        return true;
    }
}
function isValidEmail() {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (isEmpty(email)) {
        return true;
    } else if (!isEmpty(email) && !re.test(email.value)) {
        const msg = "Looks like this is not an email";
        displayError(email, msg);
        return true;
    } else {
        removeError(email);
        return false;
    }
}
function displayError(element, error_msg) {
    const error_part_id = "error-" + element.id;
    const error_msg_id = "error-msg-" + element.id;
    element.classList.add("error-input");
    document.getElementById(error_part_id).classList.add("error-icon");
    document.getElementById(error_msg_id).innerHTML = error_msg;
}
function removeError(element) {
    const error_part_id = "error-" + element.id;
    const error_msg_id = "error-msg-" + element.id;
    element.classList.remove("error-input");
    document.getElementById(error_part_id).classList.remove("error-icon");
    document.getElementById(error_msg_id).innerHTML = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    inputCheck();
});