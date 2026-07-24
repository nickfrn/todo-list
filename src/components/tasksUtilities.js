import { createTask } from "./objects";

let tasks = [];

const taskModal = document.querySelector('#createTaskDialog');
const tasksContainer = document.querySelector('#tasks-container');

// Inner function to refresh the UI when a change is made to the tasks
function refreshTasksUI() {
    tasksContainer.innerHTML = '';
    tasks.forEach((task) => {
        let rendered = renderTask(task);
        tasksContainer.appendChild(rendered);
    });
}

export function showTaskModal(event) {
    if (event.target.id === 'add-task-btn') {
        taskModal.showModal();
    }
}

 export function confirmTaskAdd() {
    const title = document.querySelector('#task-title');
    const desc = document.querySelector('#task-desk');
    const priority = document.querySelector('#task-priority');
    const dueDate = document.querySelector('#task-date');

    let task = createTask(title, desc, priority, dueDate);
    tasks.push(task);

    // Clean modal parameters and close it
    title.value = '';
    desc.value = '';
    taskModal.close();

    refreshTasksUI();
 }

// TODO
// cancelModalBtn()
// renderTasks()
// deleteTask()
// confirmEditTask()