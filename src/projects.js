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

    widgetsDiv.appendChild(createCurrentWidget());
    widgetsDiv.appendChild(createCompletedWidget());

    return widgetsDiv;
}

function createCurrentWidget() {
    const currentDiv = document.createElement('div');
    currentDiv.classList.add('projects-widget-div', 'current-div');

    const currentText = document.createElement('div');
    currentText.classList.add('welcome-text');
    currentText.innerHTML = `<h2>Current Projects</h2>
    <p>Current text</p>`;

    currentDiv.appendChild(currentText);

    return currentDiv;
}

function createCompletedWidget() {
    const completedDiv = document.createElement('div');
    completedDiv.classList.add('projects-widget-div', 'completed-div');

    const completedText = document.createElement('div');
    completedText.classList.add('welcome-text');
    completedText.innerHTML = `<h2>Completed Projects</h2>
    <p>Completed text</p>`;

    completedDiv.appendChild(completedText);

    return completedDiv;
}

function createProjects() {
    const main = document.getElementById('main');

    main.appendChild(createIntro());
    main.appendChild(createAddNewProject());
    main.appendChild(createWidgets());
}

export default createProjects;
