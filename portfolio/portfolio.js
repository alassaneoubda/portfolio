// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  }
  
  // Form submission handler (basic for now)
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic form validation (you can improve it)
    if (name && email && message) {
      alert('Merci pour votre message ! Je vous répondrai bientôt.');
      document.getElementById('contact-form').reset();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  });
  