import {Project} from './projects';
import {updateProjectListLS, retrieveProjectListLS} from './project-list';
import {loadProjectCards, loadTaskCards} from './load-cards';

// creates new project object and pushes to list
const addProjectToList = (titleInput) => {
    var newProj = new Project(titleInput.value);
    let projectList = retrieveProjectListLS();
    projectList.push(newProj);
    updateProjectListLS(projectList);
    loadProjectCards();
}

const addTaskToProject = (titleInput, projectId) => {
    let projectList = retrieveProjectListLS();
    projectList[projectId].taskList.push(titleInput.value);
    updateProjectListLS(projectList);
    loadTaskCards(projectId);
}

export {addProjectToList, addTaskToProject};