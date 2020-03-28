import {projectList} from './project-list';
import {loadProjectCards} from './projects-card-load';

const deleteProject = (projectIndex) => {
    projectList.splice(projectIndex, 1);
    loadProjectCards();
}

export {deleteProject};