function createProject() {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-content', 'project-div');

    const projectText = document.createElement('div');
    projectText.classList.add('project-text');
    projectText.innerHTML = 'Project Text';

    projectDiv.appendChild(projectText);

    return projectDiv;
}

function createProjects() {
    const main = document.getElementById('main');

    main.appendChild(createProject());
}

export default createProjects;
