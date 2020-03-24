import {projectList} from './project-list';

// renders list of projects into seperate 'cards'
const loadProjectCards = () => {
    const mainProjectsNode = document.getElementById('projects-main');
    const projectCardContainer = document.getElementById('project-card-container');

    // clear current display
    while (projectCardContainer.firstChild) {
        projectCardContainer.firstChild.remove();
    }
    
    for (let i = 0; i < projectList.length; i++) {
        let projectCard = document.createElement('div');
        projectCard.setAttribute('class', 'project-cards');
        projectCard.innerText = projectList[i].name;
        projectCardContainer.appendChild(projectCard);
        mainProjectsNode.appendChild(projectCardContainer);
    }  
}

export {loadProjectCards};