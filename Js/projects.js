import projects from '../modules/model.js';

const body = document.querySelector('body');

const techStack = (techTags) => {
  let list = '';
  techTags.forEach((tag) => {
    list += `<li>${tag}</li>`;
  });
  return list;
};

const work = document.querySelector('.work');
projects.forEach((project, index) => {
  const projectDetail = `<div class="project p${index + 1}">
<img src=${project.imagesSrc} alt="Project Screenshot" />
<div class="projectBtns">
<h3>${project.name}</h3>
<ul class="list-tech">
${techStack(project.techTags)}
</ul>
<button class="projectBtn" type="button">
  See this project <i class="fa fa-arrow-right"></i>
</button>
</div>
</div>`;
  work.innerHTML += projectDetail;
});

const innerContent = (index) => `<div class="container-popup">
<h2 class="pop-title">${projects[index].name}</h2>
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

const projectBtn = document.querySelectorAll('.projectBtn');
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
    const projectName = document.querySelector('.pop-title');
    const mainImage = document.querySelector('.pop-img');
    const techList = document.querySelector('.pop-tech-list');
    const imageContainer = document.querySelector('.pop-image-container');
    const description = document.querySelector('.pop-description');
    const seeLive = document.querySelector('.pop-btn-live');
    const seeSrc = document.querySelector('.pop-btn-src');
    imageContainer.addEventListener('click', ((e) => {
      mainImage.src = e.target.src;
      document.querySelectorAll('.pop-img-loop').forEach((image) => { image.style.border = 'none'; });
      e.target.style.border = 'thick solid #000000';
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
      projectName.innerHTML = projects[index].name;
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
      projectName.innerHTML = projects[index].name;
    }));
  });
});
