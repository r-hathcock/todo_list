import {retrieveProjectListLS} from './project-list';
import {createProjectCard, createTaskCard} from './create-cards';

// renders list of projects into seperate 'cards'
const loadProjectCards = () => {
    const projectCardContainer = document.getElementById('project-card-container');
    let projectList = retrieveProjectListLS();

    // clear current display
    while (projectCardContainer.firstChild) {
        projectCardContainer.firstChild.remove();
    }
    
    // create and append cards 
    for (let i = 0; i < projectList.length; i++) {
        createProjectCard(i);
    }  
}

const loadTaskCards = (projectId) => {
    const taskCardContainer = document.getElementById('task-card-container');
    let projectList = retrieveProjectListLS();

    // clear current display
    while (taskCardContainer.firstChild) {
        taskCardContainer.firstChild.remove();
    }
    
    // create and append cards 
    for (let i = 0; i < projectList[projectId].taskList.length; i++) {
        createTaskCard(projectId, i);
    }  
}

export {loadProjectCards, loadTaskCards};