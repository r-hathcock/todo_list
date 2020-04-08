// displays tasklist for project that was selected
const loadTaskPage = () => {
    let projectIndex = event.target.getAttribute('data-id');

    // clear page content
    const mainContentContainer = document.getElementById('main-content');
    while (mainContentContainer.firstChild) {
        mainContentContainer.firstChild.remove();
    }
}


export {loadTaskPage};