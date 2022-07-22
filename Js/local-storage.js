function getData() {
  const contactData = JSON.parse(localStorage.getItem('contactData'));
  contactData.name = document.querySelector('#name').value;
  contactData.email = document.querySelector('#email').value;
  contactData.message = document.querySelector('#message').value;
  localStorage.setItem('contactData', JSON.stringify(contactData));
}

function checkData() {
  if (!localStorage.getItem('contactData')) {
    const contactData = {
      name: '',
      email: '',
      message: '',
    };
    localStorage.setItem('contactData', JSON.stringify(contactData));
  } else {
    const contactData = JSON.parse(localStorage.getItem('contactData'));
    document.querySelector('#name').value = contactData.name;
    document.querySelector('#email').value = contactData.email;
    document.querySelector('#message').value = contactData.message;
  }
}

window.onload = () => {
  checkData();
};

document.querySelector('#name').addEventListener('keydown', getData);
document.querySelector('#email').addEventListener('keydown', getData);
document.querySelector('#message').addEventListener('keydown', getData);