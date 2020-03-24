import {Project} from './projects';
import {projectList} from './project-list';
import {loadProjectCards} from './projects-card-load';

const addProjectToList = (titleInput, id) => {
    var newProj = new Project(titleInput.value, id);
    projectList.push(newProj);
    loadProjectCards();
}

export {addProjectToList};