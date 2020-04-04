import {Project} from './projects';
import {updateProjectListLS, retrieveProjectListLS} from './project-list';
import {loadProjectCards} from './projects-card-load';

// creates new project object and pushes to list
const addProjectToList = (titleInput) => {
    var newProj = new Project(titleInput.value);
    let projectList = retrieveProjectListLS();
    projectList.push(newProj);
    updateProjectListLS(projectList);
    loadProjectCards();
}

export {addProjectToList};