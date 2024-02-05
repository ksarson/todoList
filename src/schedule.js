function createSched() {
    const scheduleDiv = document.createElement('div');
    scheduleDiv.classList.add('schedule-content', 'schedule-div');

    const scheduleText = document.createElement('div');
    scheduleText.classList.add('schedule-text');
    scheduleText.innerHTML = 'Schedule Text';

    scheduleDiv.appendChild(scheduleText);

    return scheduleDiv;
}

function createSchedule() {
    const main = document.getElementById('main');

    main.appendChild(createSched());
}

export default createSchedule;
