import { currentProjectsArray, completedProjectsArray } from './projectData';
import {
    attachEventListeners,
    moveButtonHandler,
    editButtonHandler,
    deleteButtonHandler,
} from './eventHandlers';

const projectsMessage = `<h2>Welcome to the Projects Page!</h2>
Explore the heart of your productivity journey with our Projects feature. 
Seamlessly create, organize, and track your projects to bring your ideas to life. 
Effortlessly manage tasks, collaborate with your team, and stay focused on your goals. 
With intuitive project management tools, you're empowered to turn your visions into tangible achievements. 
Start building, start collaborating - welcome to the Projects Page!`;
let count = 0;

function createIntro() {
    const introDiv = document.createElement('div');
    introDiv.classList.add('projects-content', 'intro-div');

    const introText = document.createElement('div');
    introText.classList.add('intro-text');
    introText.innerHTML = projectsMessage;

    introDiv.appendChild(introText);

    return introDiv;
}

function createAddNewProject() {
    const addNewProjectButton = document.createElement('button');
    addNewProjectButton.classList.add(
        'projects-content',
        'add-new-project-button'
    );

    const addNewProjectText = document.createElement('div');
    addNewProjectText.classList.add('add-new-project-text');
    addNewProjectText.innerHTML = `<h2>Add a New Project</h2>`;

    addNewProjectButton.appendChild(addNewProjectText);

    return addNewProjectButton;
}

function createWidgets() {
    const widgetsDiv = document.createElement('div');
    widgetsDiv.classList.add('projects-content', 'projects-widgets-div');

    widgetsDiv.appendChild(createWidget('Current Projects'));
    widgetsDiv.appendChild(createWidget('Completed Projects'));

    return widgetsDiv;
}

function createWidget(headerText) {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('projects-widget-div');

    const header = document.createElement('div');
    header.classList.add(
        `${headerText}-header`.replace(' ', '-').toLowerCase()
    );
    header.innerHTML = `<h2>${headerText}</h2>`;

    headerDiv.appendChild(header);
    headerDiv.appendChild(createList(headerText));

    return headerDiv;
}

function createList(headerText) {
    const newList = document.createElement('div');
    newList.classList.add(`${headerText}-list`.replace(' ', '-').toLowerCase());
    newList.setAttribute(
        'id',
        `${headerText}-list`.replace(' ', '-').toLowerCase()
    );

    if (headerText.toLowerCase().includes('current')) {
        currentProjectsArray.forEach((item) => {
            if (item) {
                newList.appendChild(item);
            }
        });
    }
    if (headerText.toLowerCase().includes('complete')) {
        completedProjectsArray.forEach((item) => {
            if (item) {
                newList.appendChild(item);
            }
        });
    }
    return newList;
}

function addListItem() {
    count++;
    const currentProjectsList = document.getElementById(
        'current-projects-list'
    );

    const newProjectItem = document.createElement('div');
    newProjectItem.classList.add('project-list-item');

    const textElement = document.createElement('div');
    textElement.classList.add('project-list-text');
    textElement.textContent = 'New Project ' + count;

    newProjectItem.appendChild(textElement);

    const itemActions = document.createElement('div');
    itemActions.classList.add('list-item-actions');

    //#region Create Buttons
    const moveButton = createButton(
        './img/completeIcon.svg',
        'Move',
        'move-button'
    );
    moveButton.addEventListener('click', moveButtonHandler);

    const editButton = createButton(
        './img/editIcon.svg',
        'Edit',
        'edit-button'
    );
    editButton.addEventListener('click', editButtonHandler);

    const deleteButton = createButton(
        './img/trashIcon.png',
        'Delete',
        'delete-button'
    );
    deleteButton.addEventListener('click', deleteButtonHandler);
    //#endregion

    itemActions.appendChild(moveButton);
    itemActions.appendChild(editButton);
    itemActions.appendChild(deleteButton);
    newProjectItem.appendChild(itemActions);
    currentProjectsArray.push(newProjectItem);
    updateList(currentProjectsList);

    return currentProjectsList;
}

function updateList(projectsList) {
    currentProjectsArray.forEach((e) => {
        projectsList.appendChild(e);
    });
}

function createButton(iconSrc, altText, buttonClass) {
    const button = document.createElement('button');
    button.classList.add(buttonClass);

    const icon = document.createElement('img');
    icon.src = iconSrc;
    icon.alt = altText;
    icon.style.height = '24px';
    icon.style.width = '24px';

    button.appendChild(icon);

    return button;
}

function createProjects() {
    const main = document.getElementById('main');

    main.appendChild(createIntro());
    main.appendChild(createAddNewProject());
    main.appendChild(createWidgets());
    attachEventListeners();

    const addNewProjectButton = document.querySelector(
        '.add-new-project-button'
    );
    addNewProjectButton.addEventListener('click', () => {
        addListItem();
    });
}

export default createProjects;
