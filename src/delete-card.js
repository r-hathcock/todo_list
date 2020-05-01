import {retrieveProjectListLS, updateProjectListLS} from './project-list';
import {loadProjectCards, loadTaskCards} from './load-cards';

const deleteProject = () => {
    let projectList = retrieveProjectListLS();
    let projectIndex = event.target.parentNode.getAttribute('data-id');

    if (confirm("Delete " + projectList[projectIndex].name + "?")) {
        projectList.splice(projectIndex, 1);
        updateProjectListLS(projectList);
        loadProjectCards();
    }
}

const deleteTask = (projectId, taskId) => {
    let projectList = retrieveProjectListLS();

    if (confirm("Delete " + projectList[projectId].taskList[taskId] + "?")) {
        projectList[projectId].taskList.splice(taskId, 1);
        updateProjectListLS(projectList);
        loadTaskCards(projectId);
    }
}

export {deleteProject, deleteTask};