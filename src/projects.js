//#region - Constants
const currentProjectsArray = [];
const completedProjectsArray = [];

const projectsMessage = `<h2>Welcome to the Projects Page!</h2>
Explore the heart of your productivity journey with our Projects feature. 
Seamlessly create, organize, and track your projects to bring your ideas to life. 
Effortlessly manage tasks, collaborate with your team, and stay focused on your goals. 
With intuitive project management tools, you're empowered to turn your visions into tangible achievements. 
Start building, start collaborating - welcome to the Projects Page!`;
//#endregion

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

    return newList;
}

function addListItem() {
    const currentProjectsList = document.getElementById(
        'current-projects-list'
    );

    const newProjectItem = document.createElement('div');
    newProjectItem.classList.add('project-list-item');

    const textElement = document.createElement('div');
    textElement.classList.add('project-list-text');
    textElement.textContent = 'New Project';

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
    currentProjectsList.appendChild(newProjectItem);
    currentProjectsArray.push(newProjectItem);

    return currentProjectsList;
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

function moveButtonHandler() {
    const listItem = this.closest('.project-list-item');
    if (listItem) {
        const currentList = document.getElementById('current-projects-list');
        const completedList = document.getElementById(
            'completed-projects-list'
        );
        const clonedItem = listItem.cloneNode(true);
        const moveIcon = clonedItem.querySelector('.move-button img');
        if (listItem.parentNode === currentList) {
            moveIcon.alt = 'Uncomplete';
            moveIcon.src = './img/xIcon.svg';
            completedProjectsArray.push(listItem);
            currentProjectsArray.splice(
                currentProjectsArray.indexOf(listItem),
                1
            );
            completedList.appendChild(clonedItem);
        } else if (listItem.parentNode === completedList) {
            moveIcon.alt = 'Complete';
            moveIcon.src = './img/completeIcon.svg';
            currentProjectsArray.push(listItem);
            completedProjectsArray.splice(
                completedProjectsArray.indexOf(listItem),
                1
            );
            currentList.appendChild(clonedItem);
        }
        listItem.remove();

        const clonedMoveButton = clonedItem.querySelector('.move-button');
        clonedMoveButton.addEventListener('click', moveButtonHandler);
        const clonedEditButton = clonedItem.querySelector('.edit-button');
        clonedEditButton.addEventListener('click', editButtonHandler);
        const clonedDeleteButton = clonedItem.querySelector('.delete-button');
        clonedDeleteButton.addEventListener('click', deleteButtonHandler);
    }
}

function editButtonHandler() {
    const listItem = this.closest('.project-list-item');
    if (listItem) {
        const textElement = listItem.querySelector('.project-list-text');
        if (textElement) {
            const newText = prompt('Enter new text:');
            if (newText !== null) {
                textElement.textContent = newText;
            }
        }
    }
}

function deleteButtonHandler() {
    const listItem = this.closest('.project-list-item');
    if (listItem) {
        listItem.remove();
    }
}

function createProjects() {
    const main = document.getElementById('main');

    main.appendChild(createIntro());
    main.appendChild(createAddNewProject());
    main.appendChild(createWidgets());

    const addNewProjectButton = document.querySelector(
        '.add-new-project-button'
    );
    addNewProjectButton.addEventListener('click', () => {
        addListItem();
    });
}

export default createProjects;
