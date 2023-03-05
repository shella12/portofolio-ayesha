const projectBtn = document.querySelectorAll('.projectBtn');
const body = document.querySelector('body');

const projects = [
  {
    name: "Aebinar",
    techTags: ["HTML","CSS","JavaScript"],
    imagesSrc: './images/project1.png',
    imageArray: ['./images/project1.png','./images/project1.png','./images/project1.png','./images/project1.png'],
    description: "A website, to connect an audience and provide them with remote access to a platform for taking online seminars (webinar)."+
    "- Display a list of speakers."+
    "- Display programs available."+
    "- Share a blog about the most recent webinar.",
    seeLive: 'https://shella12.github.io/AebinAR.github.io/',
    seeSource: 'https://github.com/shella12/AebinAR'
  },
  {
    name: "Space X Hub",
    techTags: ["CSS","React/Redux","RESTFUL APIs"],
    imagesSrc: './images/project2.png',
    imageArray: ['./images/project2.png','./images/project1.png','./images/project1.png','./images/project1.png'],
    description: "This is a group project I worked on as a Microverse student. This web app allows users to see available rockets for booking and missions they can join. Users can see their booked rockets and joined missions in the My-profile page and cancel any joined mission or booked rocket.",
    seeLive: 'https://clever-hamster-fb01bd.netlify.app/',
    seeSource: 'https://github.com/shella12/Space-X-hub'
  },
  {
    name: "Air Quality Index (AQI)",
    techTags: ["CSS","React/Redux","RESTFUL APIs", "Google APIs"],
    imagesSrc: './images/project3.png',
    imageArray: ['./images/project3.png','./images/project1.png','./images/project1.png','./images/project1.png'],
    description: "This web app allows users to check for air quality in different cities of the world. In addition, it provides the air pollutants ratio in detail. The project uses \"Air Pollution API\" and \"google place autocomplete \" feature for the display of air quality data and fetching cities of the world.",
    seeLive: 'https://lighthearted-blancmange-f8080f.netlify.app/',
    seeSource: 'https://github.com/shella12/air-quality-index'
  },
  {
    name: "Book Store",
    techTags: ["CSS","React/Redux","RESTFUL APIs"],
    imagesSrc: './images/project4.png',
    imageArray: ['./images/project4.png','./images/project1.png','./images/project1.png','./images/project1.png'],
    description: "The Bookstore is a website made using React Redux and REST API. It is used for saving your books online. Book Store has the following features:"+
    "-  Display a list of books."+
    "-  Add a book."+
    "-  Remove a selected book.",
    seeLive: 'https://elaborate-sprite-1687c2.netlify.app/',
    seeSource: 'https://github.com/shella12/reactBookStore'
  },
  {
    name: "Poke Play Card",
    techTags: ["HTML/CSS","JavaScript","RESTFUL APIs","Webpack"],
    imagesSrc: './images/project5.png',
    imageArray: ['./images/project5.png','./images/project1.png','./images/project1.png','./images/project1.png'],
    description: "This project is built using PokeAPI for pokemon and Involvement API for interactions. In this project, you can view different Pokemons and their abilities. You can give a like to your favorite pokemon. You can also share your thoughts on the pokemon by commenting on it.",
    seeLive: 'https://shella12.github.io/PokePlayCards.github.io/dist/',
    seeSource: 'https://github.com/shella12/PokePlayCards.github.io'
  },
  {
    name: "Math Magician",
    techTags: ["CSS","React"],
    imagesSrc: './images/project6.png',
    imageArray: ['./images/project6.png','./images/project1.png','./images/project1.png','./images/project1.png'],
    description: "\"Math magicians\" is a basic calculator website made using react for all fans of mathematics. It is a Single Page App (SPA) that allows users to:"+
    "Make simple calculations, performs all math's basic functions, add, subtract, multiply and divide."+
    "Read a random math-related quote using API.",
    seeLive: 'https://636d4335ca433e14cbbda6f5--lovely-frangipane-389b3a.netlify.app/',
    seeSource: 'https://github.com/shella12/calculator'
  }
];

const techStack = (techTags) => {
list = ``;
techTags.forEach((tag) => {
list += `<li>${tag}</li>`
})
return list;
}

const innerContent = (index) => {
return `<div class="container-popup">
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
}

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

    popClose.addEventListener('click', (() => {
      body.classList.remove('active');
      container.remove();
    }));

    popPrevLink.addEventListener('click', (() => {
      index == 0? index = 5: index -= 1;
      techList.innerHTML = `${techStack(projects[index].techTags)}`
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
      index == 5 ? index = 0 : index+=1;
      console.log(index);
      techList.innerHTML = `${techStack(projects[index].techTags)}`
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
