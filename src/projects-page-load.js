import {loadProjectCards} from './projects-card-load';
import {projectModal} from './project-modal';

// renders main home page to display title and projects
const loadProjectPage = () => {
    let pageTitle = document.createElement('h1');
    pageTitle.innerText = 'ToDo List';

    let projectsTitle = document.createElement('h2');
    projectsTitle.innerText = 'Projects';

    // loads modal to retrieve user input
    let projectsAddButton = document.createElement('button');
    projectsAddButton.setAttribute('class', 'add-btn');
    projectsAddButton.setAttribute('id', 'projects-add-btn');
    projectsAddButton.addEventListener('click', projectModal);
    projectsAddButton.innerText = '+';
    
    // append elements to main node
    let projectsTitleContainer = document.createElement('div');
    projectsTitleContainer.appendChild(projectsTitle);
    projectsTitleContainer.appendChild(projectsAddButton);
    projectsTitleContainer.setAttribute('id', 'projects-title');

    let projectCardsContainer = document.createElement('div');
    projectCardsContainer.setAttribute('id', 'project-card-container');

    let projectsMainContainer = document.createElement('div');
    projectsMainContainer.appendChild(pageTitle);
    projectsMainContainer.appendChild(projectsTitleContainer);
    projectsMainContainer.appendChild(projectCardsContainer);
    projectsMainContainer.setAttribute('id', 'projects-main');

    const mainNode = document.getElementById('main-content');
    mainNode.appendChild(projectsMainContainer);

    // render list of projects
    loadProjectCards();
};

export {loadProjectPage};