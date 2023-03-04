const projectBtn = document.querySelectorAll('.projectBtn');
const imageArray = [];
const body = document.querySelector('body');
const projects = [
  {
    name: "Aebinar",
    techTags: ["HTML","CSS","JavaScript"],
    imagesSrc: './images/project1.png',
  },
  {
    name: "Space X Hub",
    techTags: ["CSS","React/Redux","RESTFUL APIs"],
    imagesSrc: './images/project2.png',
  },
  {
    name: "Air Quality Index (AQI)",
    techTags: ["CSS","React/Redux","RESTFUL APIs", "Google APIs"],
    imagesSrc: './images/project3.png',
  },
  {
    name: "Book Store",
    techTags: ["CSS","React/Redux","RESTFUL APIs"],
    imagesSrc: './images/project4.png',
  },
  {
    name: "PokeCard",
    techTags: ["HTML/CSS","JavaScript","RESTFUL APIs","Webpack"],
    imagesSrc: './images/project5.png',
  },
  {
    name: "Math Magician",
    techTags: ["CSS","React"],
    imagesSrc: './images/project6.png',
  }
];

const techStack = (techTags) => {
list = ``;
techTags.forEach((tag) => {
list += `<li>${tag}</li>`
})
return list;
}

const work = document.querySelector('.work');
projectBtn.forEach((element, index) => {
 
  element.addEventListener('click', () => {
    body.classList.add('active');

    const container = document.createElement('div');
    container.className = 'container-base';
    container.innerHTML = `<div class="container-popup">
    <h2 class="pop-title">Project name goes here</h2>
    <button type="button" class="popup-close">X</button>
    <ul class="pop-tech-list">
    ${techStack(projects[index].techTags)}
    </ul>
    <img class="pop-img" src=${projects[index].imagesSrc} alt="Project Image"/>
    </div>`;
    work.prepend(container);

    const popClose = document.querySelector('.popup-close');
    const popTechList = document.querySelector('.pop-tech-list');

    popClose.addEventListener('click', (() => {
      body.classList.remove('active');
      container.remove();
    }));

    const popImageContainer = document.createElement('div');
    popImageContainer.className = 'pop-image-container';
    pop.appendChild(popImageContainer);

    /* eslint-disable no-plusplus */
    for (let i = 0; i < 4; i++) {
      const image = document.createElement('img');
      imageArray.push(image);
      image.classList = 'pop-img-loop';
      image.src = popImage.src;
      popImageContainer.appendChild(image);
    }

    const popDescription = document.createElement('p');
    popDescription.className = 'pop-description';
    popDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';
    pop.appendChild(popDescription);

    const popBtnLiveDiv = document.createElement('div');
    popBtnLiveDiv.className = 'pop-btn-div';
    pop.appendChild(popBtnLiveDiv);

    const popBtnLive = document.createElement('a');
    popBtnLive.className = 'pop-btn pop-btn-live';
    popBtnLive.innerText = 'See Live';
    popBtnLiveDiv.appendChild(popBtnLive);

    const popBtnSource = document.createElement('a');
    popBtnSource.className = 'pop-btn pop-btn-src';
    popBtnSource.innerText = 'See Source';
    popBtnLiveDiv.appendChild(popBtnSource);

    const popLinkDiv = document.createElement('div');
    popLinkDiv.className = 'pop-link-div';
    pop.appendChild(popLinkDiv);

    const popPrevLink = document.createElement('a');
    popPrevLink.className = 'pop-prev-link';
    popPrevLink.innerText = 'Previous Project';
    popLinkDiv.appendChild(popPrevLink);

    const popNextLink = document.createElement('a');
    popNextLink.className = 'pop-next-link';
    popNextLink.innerText = 'Next Project';
    popLinkDiv.appendChild(popNextLink);

    popPrevLink.addEventListener('click', (event) => {
      if (index === 0) {
        index = 5;
      } else index -= 1;
      popImage.src = imagesSrc[index];
      imageArray[0].src = imagesSrc[index];
      imageArray[1].src = imagesSrc[index];
      imageArray[2].src = imagesSrc[index];
      imageArray[3].src = imagesSrc[index];
    });

    popNextLink.addEventListener('click', (event) => {
      if (index === 5) {
        index = 0;
      } else index += 1;
      popImage.src = imagesSrc[index];
      imageArray[0].src = imagesSrc[index];
      imageArray[1].src = imagesSrc[index];
      imageArray[2].src = imagesSrc[index];
      imageArray[3].src = imagesSrc[index];
    });
  });
});
