//#region - Constants
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
    const newList = document.createElement('ul');
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

    const newProjectItem = document.createElement('li');
    newProjectItem.classList.add('project-list-item');
    newProjectItem.textContent = 'New Project';

    const itemActions = document.createElement('div');
    itemActions.classList.add('list-item-actions');

    // #region Complete Button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-button');

    const completeIcon = document.createElement('img');
    completeIcon.src = './img/completeIcon.svg';
    completeIcon.alt = 'Delete';
    completeIcon.style.height = '24px';
    completeIcon.style.width = '24px';

    completeButton.appendChild(completeIcon);
    // #endregion

    // #region Edit Button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');

    const editIcon = document.createElement('img');
    editIcon.src = './img/editIcon.svg';
    editIcon.alt = 'Edit';
    editIcon.style.height = '24px';
    editIcon.style.width = '24px';

    editButton.appendChild(editIcon);
    // #endregion

    // #region Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');

    const trashBinIcon = document.createElement('img');
    trashBinIcon.src = './img/trashIcon.png';
    trashBinIcon.alt = 'Delete';
    trashBinIcon.style.height = '24px';
    trashBinIcon.style.width = '24px';

    deleteButton.appendChild(trashBinIcon);
    // #endregion

    itemActions.appendChild(completeButton);
    itemActions.appendChild(editButton);
    itemActions.appendChild(deleteButton);
    newProjectItem.appendChild(itemActions);
    currentProjectsList.appendChild(newProjectItem);

    return currentProjectsList;
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
