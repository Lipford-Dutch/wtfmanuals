function toggleNav() {
  const navUl = document.querySelector('.nav-menu ul');
  if (navUl) {
    navUl.classList.toggle('open');
  }
}

function submitForm(event) {
  event.preventDefault();
  const result = document.getElementById('form-result');
  result.textContent = 'Thank you for your message! We will get back to you soon.';
  result.classList.remove('hidden');
  // Reset the form
  event.target.reset();
}
