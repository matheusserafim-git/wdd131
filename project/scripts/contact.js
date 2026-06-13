console.log("contact.js loaded");
const form = document.querySelector("#contact-form");
const confirmation =
document.querySelector("#confirmation-message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
    document.querySelector("#name").value;

    const email =
    document.querySelector("#email").value;

    const subject =
    document.querySelector("#subject").value;

    const message =
    document.querySelector("#message").value;

    const contactData = {
        name,
        email,
        subject,
        message
    };

    localStorage.setItem(
        "contactSubmission",
        JSON.stringify(contactData)
    );

    confirmation.textContent =
    `Thank you, ${name}! Your message has been received.`;

    form.reset();

});