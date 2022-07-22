document.querySelector('.form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.querySelector('.alert').innerHTML = "Email should be Lower Case!";
    event.target.reset();
  }
});