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

 export function confirmTaskAdd() {

 }
// cancelModalBtn()
// renderTasks()
// deleteTask()
// confirmEditTask()