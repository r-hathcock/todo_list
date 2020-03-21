// renders list of projects into seperate 'cards'
const loadProjectCards = () => {
    const mainProjectsNode = document.getElementById('projects-main');
    
    let projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'project-cards');

    mainProjectsNode.appendChild(projectCard);  
}

export {loadProjectCards};