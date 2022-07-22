const alert = document.querySelector('.alert');
document.querySelector('.form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    alert.innerHTML = 'Email input should be Lower Case! e.g example.com';
    // event.target.reset();
    alert.classList.add('active');
  } else {
    alert.classList.remove('active');
  }
});