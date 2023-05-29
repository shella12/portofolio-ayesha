const projectBtn = document.querySelectorAll('.projectBtn');
const body = document.querySelector('body');

const projects = [
  {
    name: 'Aebinar',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    imagesSrc: './images/project1.png',
    imageArray: ['./images/project1a.png', './images/project1b.png', './images/project1c.png', './images/project1d.png'],
    description: 'A website, to connect an audience and provide them with remote access to a platform for taking online seminars (webinar).'
    + '- Display a list of speakers.'
    + '- Display programs available.'
    + '- Share a blog about the most recent webinar.',
    seeLive: 'https://shella12.github.io/AebinAR.github.io/',
    seeSource: 'https://github.com/shella12/AebinAR',
  },
  {
    name: 'Air Quality Index (AQI)',
    techTags: ['CSS', 'React/Redux', 'RESTFUL APIs', 'Google APIs'],
    imagesSrc: './images/project2.png',
    imageArray: ['./images/project2.png', './images/project2a.png', './images/project2b.png', './images/project2c.png'],
    description: 'This web app allows users to check for air quality in different cities of the world. In addition, it provides the air pollutants ratio in detail. The project uses "Air Pollution API" and "google place autocomplete " feature for the display of air quality data and fetching cities of the world.',
    seeLive: 'https://lighthearted-blancmange-f8080f.netlify.app/',
    seeSource: 'https://github.com/shella12/air-quality-index',
  },
  {
    name: 'Poke Play Card',
    techTags: ['HTML/CSS', 'JavaScript', 'RESTFUL APIs', 'Webpack'],
    imagesSrc: './images/project3.png',
    imageArray: ['./images/project3.png', './images/project3a.png', './images/project3b.png', './images/project3c.png'],
    description: 'This project is built using PokeAPI for pokemon and Involvement API for interactions. In this project, you can view different Pokemons and their abilities. You can give a like to your favorite pokemon. You can also share your thoughts on the pokemon by commenting on it.',
    seeLive: 'https://shella12.github.io/PokePlayCards.github.io/dist/',
    seeSource: 'https://github.com/shella12/PokePlayCards.github.io',
  },
  {
    name: 'Book Store',
    techTags: ['CSS', 'React/Redux', 'RESTFUL APIs'],
    imagesSrc: './images/project4.png',
    imageArray: ['./images/project4.png', './images/project4a.png', './images/project4b.png', './images/project4c.png'],
    description: 'The Bookstore is a website made using React Redux and REST API. It is used for saving your books online. Book Store has the following features:'
    + '-  Display a list of books.'
    + '-  Add a book.'
    + '-  Remove a selected book.',
    seeLive: 'https://elaborate-sprite-1687c2.netlify.app/',
    seeSource: 'https://github.com/shella12/reactBookStore',
  },
  {
    name: 'Space X Hub',
    techTags: ['CSS', 'React/Redux', 'RESTFUL APIs'],
    imagesSrc: './images/project5.png',
    imageArray: ['./images/project5.png', './images/project5a.png', './images/project5b.png', './images/project5c.png'],
    description: 'This is a group project I worked on as a Microverse student. This web app allows users to see available rockets for booking and missions they can join. Users can see their booked rockets and joined missions in the My-profile page and cancel any joined mission or booked rocket.',
    seeLive: 'https://clever-hamster-fb01bd.netlify.app/',
    seeSource: 'https://github.com/shella12/Space-X-hub',
  },
  {
    name: 'Math Magician',
    techTags: ['CSS', 'React'],
    imagesSrc: './images/project6.png',
    imageArray: ['./images/project6.png', './images/project6a.png', './images/project6b.png', './images/project6c.png'],
    description: '"Math magicians" is a basic calculator website made using react for all fans of mathematics. It is a Single Page App (SPA) that allows users to:'
    + "Make simple calculations, performs all math's basic functions, add, subtract, multiply and divide."
    + 'Read a random math-related quote using API.',
    seeLive: 'https://636d4335ca433e14cbbda6f5--lovely-frangipane-389b3a.netlify.app/',
    seeSource: 'https://github.com/shella12/calculator',
  },
  {
    name: 'GStream',
    techTags: ['CSS', 'React'],
    imagesSrc: './images/project7.png',
    imageArray: ['./images/project7.png', './images/project7.png', './images/project7.png', './images/project7.png'],
    description: 'This is a React frontend project with an interactive and user-friendly interface and quick navigation for streaming videos. The design has been replicated from a Figma design.(Figma link can be viewed in github repo)',
    seeLive: 'https://deft-macaron-85e421.netlify.app/',
    seeSource: 'https://github.com/shella12/GStream',
  },
  {
    name: 'Budget it!',
    techTags: ['Ruby', 'Ruby on Rails', ' Postgresql'],
    imagesSrc: './images/project8.png',
    imageArray: ['./images/project8c.png', './images/project8a.png', './images/project8b.png', './images/project8d.png'],
    description: 'The Budget app keeps track of your transcations It allows the user to:'
    + '- Register and log in, so that the data is private to them.'
    + '- Introduce new transactions associated with a category.'
    + '- See the money spent on each category.',
    seeLive: 'https://budget-app-bbuu.onrender.com/',
    seeSource: 'https://github.com/shella12/budget-app',
  },
];

const techStack = (techTags) => {
  let list = '';
  techTags.forEach((tag) => {
    list += `<li>${tag}</li>`;
  });
  return list;
};

const innerContent = (index) => `<div class="container-popup">
<h2 class="pop-title">Project name goes here</h2>
<button type="button" class="popup-close">X</button>
<ul class="pop-tech-list">
${techStack(projects[index].techTags)}
</ul>
<img class="pop-img" src=${projects[index].imagesSrc} alt="Project Image"/>
<div class="pop-image-container">
<img src="${projects[index].imageArray[0]}" class="pop-img-loop" alt="small project images"/>
<img src="${projects[index].imageArray[1]}" class="pop-img-loop" alt="small project images"/>
<img src="${projects[index].imageArray[2]}" class="pop-img-loop" alt="small project images"/>
<img src="${projects[index].imageArray[3]}" class="pop-img-loop" alt="small project images"/>
</div>
<p class="pop-description">${projects[index].description}</p>
<div class="pop-btn-div">
<a href="${projects[index].seeLive}" class="pop-btn pop-btn-live">See Live</a>
<a href="${projects[index].seeSource}" class="pop-btn pop-btn-src">See Source</a>
</div>

<div class="pop-link-div">
<a class="pop-prev-link">Previous Project</a>
<a class="pop-next-link">Next Project</a>
</div>
</div>`;

const work = document.querySelector('.work');
projectBtn.forEach((element, index) => {
  element.addEventListener('click', () => {
    body.classList.add('active');

    const container = document.createElement('div');
    container.className = 'container-base';
    container.innerHTML = innerContent(index);
    work.prepend(container);

    const popClose = document.querySelector('.popup-close');
    const popPrevLink = document.querySelector('.pop-prev-link');
    const popNextLink = document.querySelector('.pop-next-link');
    const techList = document.querySelector('.pop-tech-list');
    const mainImage = document.querySelector('.pop-img');
    const imageContainer = document.querySelector('.pop-image-container');
    const description = document.querySelector('.pop-description');
    const seeLive = document.querySelector('.pop-btn-live');
    const seeSrc = document.querySelector('.pop-btn-src');
    imageContainer.addEventListener('click', ((e) => {
      mainImage.src = e.target.src;
    }));
    popClose.addEventListener('click', (() => {
      body.classList.remove('active');
      container.remove();
    }));

    popPrevLink.addEventListener('click', (() => {
      // eslint-disable-next-line no-unused-expressions
      index === 0 ? index = (projects.length - 1) : index -= 1;
      techList.innerHTML = `${techStack(projects[index].techTags)}`;
      mainImage.src = projects[index].imagesSrc;
      imageContainer.innerHTML = `
      <img src="${projects[index].imageArray[0]}" class="pop-img-loop" alt="small project images"/>
      <img src="${projects[index].imageArray[1]}" class="pop-img-loop" alt="small project images"/>
      <img src="${projects[index].imageArray[2]}" class="pop-img-loop" alt="small project images"/>
      <img src="${projects[index].imageArray[3]}" class="pop-img-loop" alt="small project images"/>`;
      description.innerHTML = projects[index].description;
      seeLive.href = projects[index].seeLive;
      seeSrc.href = projects[index].seeSource;
    }));

    popNextLink.addEventListener('click', (() => {
      // eslint-disable-next-line no-unused-expressions
      index === (projects.length - 1) ? index = 0 : index += 1;
      techList.innerHTML = `${techStack(projects[index].techTags)}`;
      mainImage.src = projects[index].imagesSrc;
      imageContainer.innerHTML = `
      <img src="${projects[index].imageArray[0]}" class="pop-img-loop" alt="small project images"/>
      <img src="${projects[index].imageArray[1]}" class="pop-img-loop" alt="small project images"/>
      <img src="${projects[index].imageArray[2]}" class="pop-img-loop" alt="small project images"/>
      <img src="${projects[index].imageArray[3]}" class="pop-img-loop" alt="small project images"/>`;
      description.innerHTML = projects[index].description;
      seeLive.href = projects[index].seeLive;
      seeSrc.href = projects[index].seeSource;
    }));
  });
});
