var projectList = [];

const updateProjectListLS = (projectList) => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
};

const retrieveProjectListLS = () => {
    return JSON.parse(localStorage.getItem('projectList'));
};

export {projectList, updateProjectListLS, retrieveProjectListLS};