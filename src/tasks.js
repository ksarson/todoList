function createTask() {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-content', 'tasj-div');

    const taskText = document.createElement('div');
    taskText.classList.add('task-text');
    taskText.innerHTML = 'Tasks Text';

    taskDiv.appendChild(taskText);

    return taskDiv;
}

function createTasks() {
    const main = document.getElementById('main');

    main.appendChild(createTask());
}

export default createTasks;
