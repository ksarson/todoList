import { currentProjectsArray, completedProjectsArray } from './projectData';
import createHomepage from './homepage';
import createProjects from './projects';
import createTasks from './tasks';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerImage = document.createElement('img');
    headerImage.classList.add('header-image');
    headerImage.setAttribute('src', './img/listIcon.png');
    headerImage.setAttribute('alt', 'listIcon');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-text');
    headerTitle.appendChild(headerImage);

    const appName = document.createElement('h1');
    appName.classList.add('app-name');
    appName.textContent = 'List.io';
    headerTitle.appendChild(appName);

    header.appendChild(headerTitle);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homepageButton = document.createElement('button');
    homepageButton.classList.add('nav-button', 'homepage-button');
    homepageButton.textContent = 'Home';
    nav.appendChild(homepageButton);

    const projectsButton = document.createElement('button');
    projectsButton.classList.add('nav-button', 'projects-button');
    projectsButton.textContent = 'Projects';
    nav.appendChild(projectsButton);

    const tasksButton = document.createElement('button');
    tasksButton.classList.add('nav-button', 'tasks-button');
    tasksButton.textContent = 'Tasks';
    nav.appendChild(tasksButton);

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    main.classList.add('main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Copyright © 2024 Kolby Sarson';
    footer.appendChild(footerText);

    const githubLink = document.createElement('a');
    githubLink.classList.add('github-icon');
    githubLink.href = 'https://github.com/ksarson/todoList';
    githubLink.target = '_blank';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab', 'fa-github');

    githubLink.appendChild(githubIcon);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);

    return footer;
}

function clearContent() {
    const main = document.getElementById('main');
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    createProjects();

    const homepageButton = document.querySelector('.homepage-button');
    homepageButton.addEventListener('click', () => {
        clearContent();
        createHomepage();
    });

    const projectsButton = document.querySelector('.projects-button');
    projectsButton.addEventListener('click', () => {
        clearContent();
        createProjects();
    });

    const tasksButton = document.querySelector('.tasks-button');
    tasksButton.addEventListener('click', () => {
        clearContent();
        createTasks();
    });
}

export default initializeWebsite;
