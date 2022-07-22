function getData () {
  const formData  = JSON.parse(localStorage.getItem('formData'));
  formData.name = document.querySelector('#name').value;
  formData.email = document.querySelector('#email').value;
  formData.message = document.querySelector('#message').value;
  localStorage.setItem('formData', JSON.stringify(formData));
}

function checkData(){
  if (!localStorage.getItem('formData')) {
    const formData = {
      name : '',
      email : '',
      message : '',
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  } else {
    const formData = JSON.parse(localStorage.getItem('formData'));
    document.querySelector('#name').value = formData.name;
    document.querySelector('#email').value = formData.email;
    document.querySelector('#message').value = formData.message;
  }
}

window.onload = () => {
  checkData();
}

document.querySelector('#name').addEventListener('keydown', getData)
document.querySelector('#email').addEventListener('keydown', getData)
document.querySelector('#message').addEventListener('keydown', getData)