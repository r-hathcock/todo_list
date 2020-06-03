import {addProjectToList, addTaskToProject} from './add-to-list';

// modal to prompt user for project name
const projectModal = () => {
    const addProjBtn = document.getElementById('add-new-project');
    let projModal = document.getElementById('project-modal');
    let closeBtn = document.getElementsByClassName('close')[0];
    let titleInput = document.getElementById('project-title');

    titleInput.value = '';
    projModal.style.display = 'block';

    addProjBtn.onclick = () => {
        projModal.style.display = 'none';
        addProjectToList(titleInput);
        titleInput.value = '';
    }

    closeBtn.onclick = () => {
        titleInput.value = '';
        projModal.style.display = 'none';
    }
};

// modal to prompt user for task information
const taskModal = (projectId) => {
    const addTaskBtn = document.getElementById('add-new-task');
    let taskModal = document.getElementById('task-modal');
    let closeBtn = document.getElementsByClassName('close')[0];
    let taskTitleInput = document.getElementById('new-task-title');

    taskTitleInput.value = '';
    taskModal.style.display = 'block';

    addTaskBtn.onclick = () => {
        taskModal.style.display = 'none';
        addTaskToProject(taskTitleInput, projectId);
        taskTitleInput.value = '';
    }

    closeBtn.onclick = () => {
        taskTitleInput.value = '';
        taskModal.style.display = 'none';
    }
};
export {projectModal, taskModal};