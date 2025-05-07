function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validación: Comprobar que los campos no están vacíos
    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return; // Detiene la ejecución si algún campo está vacío
    }

    const text = `Hola! Soy ${name}. Mi email es ${email}. Te escribo quiero información, gracias: ${message}`;
    const phoneNumber = "5491169466999"; // ← reemplazá con tu número incluyendo código país y sin espacios

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}
