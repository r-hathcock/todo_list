const updateProjectListLS = (projectList) => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
};

const retrieveProjectListLS = () => {
    if (JSON.parse(localStorage.getItem('projectList')) == null) {
        var projectList = [];
        return projectList;
    }
    else
        return JSON.parse(localStorage.getItem('projectList'));
};

export {updateProjectListLS, retrieveProjectListLS};