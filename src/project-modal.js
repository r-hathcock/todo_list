import {addProjectToList} from './project-add-to-list';

// modal to prompt user for data
const projectModal = () => {
    const addProjBtn = document.getElementById('add-new-project');
    let projModal = document.getElementById('project-modal');
    let closeBtn = document.getElementsByClassName('close')[0];
    let titleInput = document.getElementById('project-title');

    titleInput.value = '';
    projModal.style.display = 'block';

    addProjBtn.onclick = () => {
        addProjectToList(titleInput, 0);
        titleInput.value = '';
        projModal.style.display = 'none';
    }

    closeBtn.onclick = () => {
        titleInput.value = '';
        projModal.style.display = 'none';
    }
};

export {projectModal};