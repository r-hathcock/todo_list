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
}

// renders task page to display chosen project's task list
const loadTaskPage = () => {
    const mainNode = document.getElementById('main-content');

    // clear current page contents
    while (mainNode.firstChild) {
        mainNode.firstChild.remove();
    }

    let pageTitle = document.createElement('h1');
    pageTitle.innerText = 'ToDo List';

    let taskTitle = document.createElement('h2');
    taskTitle.innerText = 'Tasks';

    // loads modal to retrieve user input
    let taskAddButton = document.createElement('button');
    taskAddButton.setAttribute('class', 'add-btn');
    taskAddButton.setAttribute('id', 'task-add-btn');
    taskAddButton.addEventListener('click', projectModal);
    taskAddButton.innerText = '+';
    
    // append elements to main node
    let taskTitleContainer = document.createElement('div');
    taskTitleContainer.appendChild(taskTitle);
    taskTitleContainer.appendChild(taskAddButton);
    taskTitleContainer.setAttribute('id', 'task-title');

    let taskCardsContainer = document.createElement('div');
    taskCardsContainer.setAttribute('id', 'task-card-container');

    let taskMainContainer = document.createElement('div');
    taskMainContainer.appendChild(pageTitle);
    taskMainContainer.appendChild(taskTitleContainer);
    taskMainContainer.appendChild(taskCardsContainer);
    taskMainContainer.setAttribute('id', 'task-main');

    // append all content to main container
    mainNode.appendChild(taskMainContainer);

    // render list of tasks
    loadProjectCards();
}

export {loadProjectPage, loadTaskPage};