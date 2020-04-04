import {retrieveProjectListLS} from './project-list';
import {createProjectCard} from './create-project-card';

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

export {loadProjectCards};