// Simple contact form handler
const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('contactMessage');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    messageDiv.textContent = 'Thank you for reaching out! 💌';
    form.reset();
  });
}
