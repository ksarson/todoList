//#region - Constants
const welcomeMessage = `<h2>Welcome to Your To-Do List App!</h2>
    Embrace productivity with our feature-rich to-do list. Seamlessly create, manage, and prioritize tasks. 
    Effortlessly organize projects and group tasks, fostering efficiency in your daily workflow.
    Enhance collaboration by sharing projects and tasks with your team. Stay on top of deadlines 
    and timelines with our scheduling feature. Experience the power of productivity at your fingertips. 
    Let's turn your ideas into accomplishments. Start organizing, start achieving!`;

const projectsFeature = 'Projects';
const projectsUrl = './img/projectsIcon.png';
const projectsDesc =
    'Effortlessly organize and group tasks for efficient project management.';

const tasksFeature = 'Tasks';
const tasksDesc = 'Manage small, individual jobs with flexibility and ease.';
const tasksUrl = './img/tasksIcon.png';

const scheduleFeature = 'Schedule';
const scheduleDesc =
    'Track timelines and deadlines for projects and tasks with precision.';
const scheduleUrl = './img/scheduleIcon.png';
//#endregion

function createWelcome() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('homepage-content', 'intro-div');

    const welcomeText = document.createElement('div');
    welcomeText.classList.add('welcome-text');
    welcomeText.innerHTML = welcomeMessage;

    welcomeDiv.appendChild(welcomeText);
    welcomeDiv.appendChild(createFeatures());

    return welcomeDiv;
}

function createFeatures() {
    const featuresDiv = document.createElement('div');
    featuresDiv.classList.add('features-div');

    featuresDiv.appendChild(
        createFeature(projectsFeature, projectsUrl, projectsDesc)
    );
    featuresDiv.appendChild(createFeature(tasksFeature, tasksUrl, tasksDesc));
    featuresDiv.appendChild(
        createFeature(scheduleFeature, scheduleUrl, scheduleDesc)
    );

    return featuresDiv;
}

function createFeature(featureName, featureUrl, featureDesc) {
    const featureDiv = document.createElement('div');
    featureDiv.classList.add('feature-div');
    featureDiv.innerHTML = `<h2>${featureName}</h2><br><img class='feature-img' src='${featureUrl}'/><br>${featureDesc}`;

    return featureDiv;
}

function createWidgets() {
    const widgetsDiv = document.createElement('div');
    widgetsDiv.classList.add('homepage-content', 'widgets-div');

    widgetsDiv.appendChild(createUpcomingWidget());
    widgetsDiv.appendChild(createRecentlyClosedWidget());

    return widgetsDiv;
}

function createUpcomingWidget() {
    const upcomingDiv = document.createElement('div');
    upcomingDiv.classList.add('widget-div', 'upcoming-div');

    const upcomingText = document.createElement('div');
    upcomingText.classList.add('welcome-text');
    upcomingText.innerHTML = `<h2>Upcoming</h2>
    <p>Upcoming text</p>`;

    upcomingDiv.appendChild(upcomingText);

    return upcomingDiv;
}

function createRecentlyClosedWidget() {
    const recentlyClosedDiv = document.createElement('div');
    recentlyClosedDiv.classList.add('widget-div', 'upcoming-div');

    const recentlyClosedText = document.createElement('div');
    recentlyClosedText.classList.add('welcome-text');
    recentlyClosedText.innerHTML = `<h2>Recently Closed</h2>
    <p>Recently closed text</p>`;

    recentlyClosedDiv.appendChild(recentlyClosedText);

    return recentlyClosedDiv;
}

function createHomepage() {
    const main = document.getElementById('main');

    main.appendChild(createWelcome());
    main.appendChild(createWidgets());
}

export default createHomepage;
