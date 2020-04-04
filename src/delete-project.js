import {retrieveProjectListLS, updateProjectListLS} from './project-list';
import {loadProjectCards} from './projects-card-load';

const deleteProject = (projectIndex) => {
    let projectList = retrieveProjectListLS();
    projectList.splice(projectIndex, 1);
    updateProjectListLS(projectList);
    loadProjectCards();
}

export {deleteProject};