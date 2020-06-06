import {loadProjectCards, loadTaskCards} from './load-cards';
import {projectModal, taskModal} from './modals';
import {retrieveProjectListLS, updateProjectListLS} from './project-list';

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
const loadTaskPage = (projectId) => {
    const mainNode = document.getElementById('main-content');
    let projectList = retrieveProjectListLS();
    let currentProject = projectList[projectId];

    // clear current page contents
    while (mainNode.firstChild) {
        mainNode.firstChild.remove();
    }

    let pageTitle = document.createElement('h1');
    pageTitle.innerText = 'ToDo List';


    let taskTitle = document.createElement('h2');
    taskTitle.innerText = currentProject.name + ' Tasks';

    // loads modal to retrieve user input
    let taskPageBackBtn = document.createElement('button');
    taskPageBackBtn.setAttribute('id', 'task-page-back-btn');
    taskPageBackBtn.innerText = '<-';
    taskPageBackBtn.addEventListener('click', function(){location.reload()} );

    let taskAddButton = document.createElement('button');
    taskAddButton.setAttribute('class', 'add-btn');
    taskAddButton.setAttribute('id', 'task-add-btn');
    taskAddButton.addEventListener('click', function(){taskModal(projectId)});
    taskAddButton.innerText = '+';
    
    // append elements to main node
    let taskTitleContainer = document.createElement('div');
    taskTitleContainer.appendChild(taskPageBackBtn);
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

    updateProjectListLS(projectList);

    // render list of tasks
    loadTaskCards(projectId);
}

export {loadProjectPage, loadTaskPage};