console.log("Mietakor Portfolio loaded successfully!");

function sendToWhatsApp() {

    const form = event.target;

    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const subject = form.querySelector('[name="subject"]').value;
    const message = form.querySelector('[name="message"]').value;

    const text =
        "Hello Mietakor!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Subject: " + subject + "\n\n" +
        "Project Details:\n" + message;

    const whatsappNumber = "231889452201";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(text);

    window.location.href = url;
}