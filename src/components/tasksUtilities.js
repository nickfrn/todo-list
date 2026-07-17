import { createTask } from "./objects";

let tasks = [];

const taskModal = document.querySelector('#createTaskDialog');
const tasksContainer = document.querySelector('#tasks-container');

export function showTaskModal(event) {
    if (event.target.id === 'add-task-btn') {
        taskModal.showModal();
    }
}

// Inner function to refresh the UI when a change is made to the tasks
function refreshTasksUI() {
    tasksContainer.innerHTML = '';
    tasks.forEach((task) => {
        let rendered = renderTask(task);
        tasksContainer.appendChild(rendered);
    });
}

// TODO: Continue from here
 export function confirmTaskAdd() {
    const title = document.querySelector('#task-title');
    const desc = document.querySelector('#task-desk');
    const priority = document.querySelector('#task-priority');
    const dueDate = document.querySelector('#task-date');

    // TODO: Finish logic
 }

 // TODO
// cancelModalBtn()
// renderTasks()
// deleteTask()
// confirmEditTask()