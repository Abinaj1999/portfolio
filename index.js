function sendMail() {
    // Retrieve input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if any of the fields are empty
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return; // Stop execution if any field is empty
    }

    // Check if the email is valid
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // Stop execution if email is invalid
    }

    // Construct parameters object
    var params = {
        name: name,
        email: email,
        message: message
    };

    const serviceID = "service_75wjuvm";
    const templateID = "template_i4cz5tr";

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log(res);
            alert("Your message was sent successfully.");
        })
        .catch((err) => console.log(err));
}
