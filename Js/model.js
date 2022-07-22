const projectBtn = document.querySelectorAll('.projectBtn');
const imageArray = [];
const body = document.querySelector('body');
const imagesSrc = ['./images/project1.png', './images/project5.png', './images/project2.png', './images/project4.png', './images/project3.png', './images/project6.png'];
const techTags = ['HTML/CSS', 'Ruby on Rails', 'JavaScript'];
const work = document.querySelector('.work');
projectBtn.forEach((element, index) => {
  /* eslint-disable no-unused-vars */
  element.addEventListener('click', (event) => {
    body.classList.add('active');

    const container = document.createElement('div');
    container.className = 'container-base';
    work.prepend(container);

    const pop = document.createElement('div');
    pop.className = 'container-popup';
    container.appendChild(pop);

    const popClose = document.createElement('button');
    popClose.className = 'popup-close';
    popClose.innerText = 'X';
    /* eslint-disable no-unused-vars */
    popClose.addEventListener('click', ((event) => {
      body.classList.remove('active');
      container.remove();
    }));
    pop.appendChild(popClose);

    const popTitle = document.createElement('h2');
    popTitle.innerHTML = 'Project name goes here';
    popTitle.className = 'pop-title';
    pop.appendChild(popTitle);

    const popTechList = document.createElement('ul');
    popTechList.className = 'pop-tech-list';
    pop.appendChild(popTechList);

    techTags.forEach((element) => {
      const popTechListContent = document.createElement('li');
      popTechListContent.innerHTML = element;
      popTechList.appendChild(popTechListContent);
    });

    const popImage = document.createElement('img');
    popImage.src = imagesSrc[index];
    popImage.className = 'pop-img';
    pop.appendChild(popImage);

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

    // const popBtnLiveImage = document.createElement('img');
    // popBtnLiveImage.src = './images/live-link.png';
    // popBtnLiveImage.className = 'pop-a-img';
    // popBtnLive.appendChild(popBtnLiveImage);

    const popBtnSource = document.createElement('a');
    popBtnSource.className = 'pop-btn pop-btn-src';
    popBtnSource.innerText = 'See Source';
    popBtnLiveDiv.appendChild(popBtnSource);

    // const popBtnSrcImage = document.createElement('img');
    // popBtnSrcImage.src = './images/src-link.png';
    // popBtnSrcImage.className = 'pop-a-img';
    // popBtnSource.appendChild(popBtnSrcImage);

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
