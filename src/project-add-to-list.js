import {Project} from './projects';
import {projectList} from './project-list';
import {loadProjectCards} from './projects-card-load';

const addProjectToList = (titleInput) => {
    var newProj = new Project(titleInput.value);
    projectList.push(newProj);
    loadProjectCards();
}

export {addProjectToList};