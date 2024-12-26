// script.js
function validateForm() {
    // Get form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = "";

    // Check if name is empty
    if (name === "") {
        errorMessage += "Name is required.\n";
    }

    // Check if email is empty or invalid
    if (email === "") {
        errorMessage += "Email is required.\n";
    } else {
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            errorMessage += "Please enter a valid email address.\n";
        }
    }

    // Check if message is empty
    if (message === "") {
        errorMessage += "Message is required.\n";
    }

    // If there are errors, show an alert and prevent form submission
    if (errorMessage) {
        alert(errorMessage);
        return false;
    }

    // If validation passes, allow form submission
    alert("Form submitted successfully!");
    return true;
}
