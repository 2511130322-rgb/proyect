// Remplaza con tus credenciales de EmailJS
const PUBLIC_KEY = "MqnG4TJzloCoWiS-V";
const SERVICE_ID = "service_pzt3gw9";
const TEMPLATE_ID = "template_bs4pafj";

// Inicializar EmailJS
(function() {
  emailjs.init(PUBLIC_KEY);
})();

const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validación básica
  const userName = document.getElementById('user_name').value.trim();
  const userEmail = document.getElementById('user_email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!userName || !userEmail || !message) {
    showStatus('Por favor, completa todos los campos correctamente.', 'error');
    return;
  }

  // Deshabilitar botón durante el envío
  submitBtn.disabled = true;
  submitBtn.innerText = 'Enviando...';

  // Envío a través de EmailJS
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
      showStatus('¡Correo enviado con éxito!', 'success');
      form.reset();
    })
    .catch((error) => {
      console.error('Error EmailJS:', error);
      showStatus('Ocurrió un error al enviar el correo. Intenta nuevamente.', 'error');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = 'Enviar Correo';
    });
});

function showStatus(msg, type) {
  statusMessage.textContent = msg;
  statusMessage.className = `status ${type}`;
  statusMessage.style.display = 'block';
}