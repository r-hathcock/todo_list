import {retrieveProjectListLS} from './project-list';
import {loadTaskPage} from './page-load';
import {deleteProject, deleteTask} from './delete-card';

const createProjectCard = (listIndex) => {
    const mainProjectsNode = document.getElementById('projects-main');
    const projectCardContainer = document.getElementById('project-card-container');
    let projectList = retrieveProjectListLS();
    
    let projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'project-cards');
    projectCard.setAttribute('data-id', listIndex);
    projectCard.addEventListener('click', function() {
        if (event.target.getAttribute('class') === 'project-card-del-btn') 
            deleteProject();
        else
            loadTaskPage(listIndex);
    });

    let projectCardName = document.createElement('div');
    projectCardName.setAttribute('class', 'project-name');
    projectCardName.innerText = projectList[listIndex].name;
    projectCard.appendChild(projectCardName);

    let projectCardDeleteBtn = document.createElement('button');
    projectCardDeleteBtn.setAttribute('class', 'project-card-del-btn');
    projectCardDeleteBtn.innerText = 'x';
    projectCard.appendChild(projectCardDeleteBtn);

    projectCardContainer.appendChild(projectCard);
    mainProjectsNode.appendChild(projectCardContainer);
}

const createTaskCard = (projectId, taskId) => {
    const mainTaskNode = document.getElementById('task-main');
    const taskCardContainer = document.getElementById('task-card-container');
    let projectList = retrieveProjectListLS();
    
    let taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'task-cards');
    taskCard.setAttribute('data-id', taskId);
    taskCard.addEventListener('click', function() {
        if (event.target.getAttribute('class') === 'task-card-del-btn') 
            deleteTask(projectId, taskId);
    }); 

    let taskCardName = document.createElement('div');
    taskCardName.setAttribute('class', 'task-name');
    taskCardName.innerText = projectList[projectId].taskList[taskId];
    taskCard.appendChild(taskCardName);

    let taskCardDeleteBtn = document.createElement('button');
    taskCardDeleteBtn.setAttribute('class', 'task-card-del-btn');
    taskCardDeleteBtn.innerText = 'X';
    taskCard.appendChild(taskCardDeleteBtn);

    taskCardContainer.appendChild(taskCard);
    mainTaskNode.appendChild(taskCardContainer);
}

export {createProjectCard, createTaskCard};