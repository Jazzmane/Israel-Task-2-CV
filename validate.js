function validateForm() {
    const name = document.getElementById("nameForm");
    const email = document.getElementById("email");
    const title = document.getElementById("title");
    const textarea = document.getElementById("textarea");

    removeMessage();
    let valid = true;
    if (nameForm.value.length < 4) {
        nameForm.className = "error-input";
        nameForm.nextElementSibling.innerHTML = "Name must contain at least 4 characters";
        valid = false;
    }
    if (textarea.value.length < 20) {
        textarea.className = "error-input";
        textarea.nextElementSibling.innerHTML = "Message must contain at least 20 characters";
        valid = false;

    }
    if (title.value.length == 0) {
        title.className = "error-input";
        title.nextElementSibling.innerHTML = "Please input Title";
        valid = false;

    }
    if (email.value.length == 0) {
        email.className = "error-input";
        email.nextElementSibling.innerHTML = "Please input Email";
        valid = false;

    }
    return valid;
}

function removeMessage() {
    let errorRemove = document.querySelectorAll(".error-input");
    [].forEach.call(errorRemove, function(el) {
        el.classList.remove("error-input");
    });

    let errorP = document.querySelectorAll(".errorMessage");
    [].forEach.call(errorP, function(el) {
        el.innerHTML = "";
    });
}