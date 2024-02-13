import { currentProjectsArray, completedProjectsArray } from './projectData';

function attachEventListeners() {
    const moveButtons = document.querySelectorAll('.move-button');
    moveButtons.forEach((button) => {
        button.addEventListener('click', moveButtonHandler);
    });

    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach((button) => {
        button.addEventListener('click', editButtonHandler);
    });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', deleteButtonHandler);
    });
}

function moveButtonHandler() {
    const listItem = this.closest('.project-list-item');
    if (listItem) {
        const currentList = document.getElementById('current-projects-list');
        const completedList = document.getElementById(
            'completed-projects-list'
        );
        const upcomingList = document.getElementById('upcoming-list');
        const recentlyClosedList = document.getElementById(
            'recently-closed-list'
        );
        const clonedItem = listItem.cloneNode(true);
        const moveIcon = clonedItem.querySelector('.move-button img');

        if (listItem.parentNode === currentList) {
            moveIcon.alt = 'Uncomplete';
            moveIcon.src = './img/xIcon.svg';
            completedProjectsArray.push(clonedItem);
            currentProjectsArray.splice(
                currentProjectsArray.indexOf(clonedItem),
                1
            );
            completedList.appendChild(clonedItem);
        } else if (listItem.parentNode === upcomingList) {
            moveIcon.alt = 'Uncomplete';
            moveIcon.src = './img/xIcon.svg';
            completedProjectsArray.push(clonedItem);
            currentProjectsArray.splice(
                currentProjectsArray.indexOf(clonedItem),
                1
            );
            recentlyClosedList.appendChild(clonedItem);
        } else if (listItem.parentNode === completedList) {
            moveIcon.alt = 'Complete';
            moveIcon.src = './img/completeIcon.svg';
            currentProjectsArray.push(clonedItem);
            completedProjectsArray.splice(
                completedProjectsArray.indexOf(clonedItem),
                1
            );
            currentList.appendChild(clonedItem);
        } else if (listItem.parentNode === recentlyClosedList) {
            moveIcon.alt = 'Complete';
            moveIcon.src = './img/completeIcon.svg';
            currentProjectsArray.push(clonedItem);
            completedProjectsArray.splice(
                completedProjectsArray.indexOf(clonedItem),
                1
            );
            upcomingList.appendChild(clonedItem);
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
        const indexInCurrentArray = currentProjectsArray.indexOf(listItem);
        if (indexInCurrentArray !== -1) {
            currentProjectsArray.splice(indexInCurrentArray, 1);
        }
        const indexInCompletedArray = completedProjectsArray.indexOf(listItem);
        if (indexInCompletedArray !== -1) {
            completedProjectsArray.splice(indexInCompletedArray, 1);
        }
    }
}

export {
    moveButtonHandler,
    editButtonHandler,
    deleteButtonHandler,
    attachEventListeners,
};
