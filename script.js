
function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)"
}

function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user input
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Your WhatsApp number (replace with actual number)
    let phoneNumber = "91XXXXXXXXXX"; 

    // Format message for WhatsApp
    let whatsappMessage = `Hello, I am ${name}.%0AEmail: ${email}%0A%0A${message}`;

    // Open WhatsApp chat
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
}