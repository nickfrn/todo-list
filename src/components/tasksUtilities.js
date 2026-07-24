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
    const desc = document.querySelector('#task-desc');
    const priority = document.querySelector('#task-priority');
    const dueDate = document.querySelector('#task-date');

    let task = createTask(title.value, desc.value, priority.value, dueDate.value);
    tasks.push(task);

    // Clean modal parameters and close it
    title.value = '';
    desc.value = '';
    taskModal.close();

    refreshTasksUI();
 }

// !!! cancelModalBtn already impplemented in listUtilities !!!

function renderTask(task) {
    // Create task item
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.setAttribute('data-id', task.id);

    // Create title element
    const taskTitle = document.createElement('h2');;
    taskTitle.textContent = task.title;
    taskTitle.classList.add('task-title');

    // Create description element
    const taskDesc = document.createElement('p');;
    taskDesc.textContent = task.desc;
    taskDesc.classList.add('task-desc');

    // Create priority element
    const taskPriority = document.createElement('p');;
    taskPriority.textContent = task.priority;
    taskPriority.classList.add('task-priority');

    // Create due date element
    const taskDate = document.createElement('p');;
    taskDate.textContent = task.dueDate;
    taskDate.classList.add('task-date');

    taskItem.append(taskTitle, taskDesc, taskPriority, taskDate);

    return taskItem;
}

// TODO
// deleteTask()
// confirmEditTask()