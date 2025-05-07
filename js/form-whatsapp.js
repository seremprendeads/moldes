<script>
  function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const text = `Hola! Soy ${name}. Mi email es ${email}. Te escribo quiero inforación, gracias: ${message}`;
    const phoneNumber = "5491169466999"; // ← reemplazá con tu número incluyendo código país y sin espacios

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
</script>
