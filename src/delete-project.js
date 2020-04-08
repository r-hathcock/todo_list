import {retrieveProjectListLS, updateProjectListLS} from './project-list';
import {loadProjectCards} from './projects-card-load';

const deleteProject = () => {
    let projectList = retrieveProjectListLS();
    let projectIndex = event.target.parentNode.getAttribute('data-id');

    if (confirm("Delete " + projectList[projectIndex].name + "?")) {
        projectList.splice(projectIndex, 1);
        updateProjectListLS(projectList);
        loadProjectCards();
    }
}

export {deleteProject};