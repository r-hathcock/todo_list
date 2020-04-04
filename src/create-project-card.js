import {retrieveProjectListLS} from './project-list';
import {deleteProject} from './delete-project';

const createProjectCard = (listIndex) => {
    const mainProjectsNode = document.getElementById('projects-main');
    const projectCardContainer = document.getElementById('project-card-container');
    let projectList = retrieveProjectListLS();
    
    let projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'project-cards');
    projectCard.setAttribute('data-id', listIndex);

    let projectCardName = document.createElement('div');
    projectCardName.setAttribute('class', 'project-name');
    projectCardName.innerText = projectList[listIndex].name;
    projectCard.appendChild(projectCardName);

    let projectCardDeleteBtn = document.createElement('button');
    projectCardDeleteBtn.setAttribute('class', 'project-card-del-btn');
    projectCardDeleteBtn.addEventListener('click', function(){ deleteProject(listIndex); });
    projectCardDeleteBtn.innerText = 'Delete';
    projectCard.appendChild(projectCardDeleteBtn);

    projectCardContainer.appendChild(projectCard);
    mainProjectsNode.appendChild(projectCardContainer);
}

export {createProjectCard};