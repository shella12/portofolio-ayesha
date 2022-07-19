let navbar=document.querySelector('.desk-nav');
let navbar_menu=document.querySelector('.desk-nav > ul');
let hamburger=document.querySelector('.hamburger');

hamburger.addEventListener('click', function(event){
    
console.log('The button was clicked!');
navbar.classList.toggle('click');
navbar_menu.classList.toggle('click-ul');
hamburger.classList.toggle('active');
});