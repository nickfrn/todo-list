import { createTask } from "./objects";
import edit from '../assets/pencil.png';
import del from '../assets/delete.png';

let tasks = [];

const taskModal = document.querySelector('#createTaskDialog');
const editTaskModal = document.querySelector('#editTaskDialog');
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
    } else if (event.target.getAttribute('data-type') === 'edit-task') {
        // Find ID of the task item
        const taskItem = event.target.closest('.task-item');
        const taskId = taskItem.getAttribute('data-id');

        // Save ID inside the modal element
        editTaskModal.setAttribute('data-editing-id', taskId);

        // Pre-fill input box with old name
        const taskToEdit = tasks.find(task => task.id === taskId);
        document.querySelector('#new-task-title').value = taskToEdit.name;

        editTaskModal.showModal();
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

    // Add edit and delete icons to the task item
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('list-icons');

    const editIcon = document.createElement('img');
    editIcon.src = edit;
    editIcon.classList.add('icon');
    editIcon.classList.add('edit');
    editIcon.setAttribute('data-type', 'edit-task');
    editIcon.addEventListener('click', showTaskModal);

    const deleteIcon = document.createElement('img');
    deleteIcon.src = del;
    deleteIcon.classList.add('icon');
    deleteIcon.classList.add('delete');
    deleteIcon.addEventListener('click', deleteTask);

    iconsDiv.append(editIcon, deleteIcon);
    taskItem.append(taskTitle, iconsDiv);

    return taskItem;
}

export function confirmEditTask(event) {
    event.preventDefault();

    const taskId = editTaskModal.getAttribute('data-editing-id'); // Read stored ID in modal
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    let newTitle = document.querySelector('#new-task-title');
    let newDesc = document.querySelector('#new-task-desc');
    let newPriority = document.querySelector('#new-task-priority');
    let newDate = document.querySelector('#new-task-date');
    
    tasks[taskIndex].title = newTitle.value;
    tasks[taskIndex].desc = newDesc.value;
    tasks[taskIndex].priority = newPriority.value;
    tasks[taskIndex].dueDate = newDate.value;

    // Clear fields for next iteration
    newTitle.value = ''; 
    newDesc.value = '';
    editTaskModal.close();

    refreshTasksUI();
}

export function deleteTask(event) {
    let taskItem = event.target.closest('.task-item');
    let taskId = taskItem.getAttribute('data-id');

    tasks = tasks.filter((list) => list.id !== taskId);

    refreshTasksUI();

    return tasks;
}