import './styles/main.css';
import { initLists, showListModal, confirmListAdd, modalCancelBtn, deleteList, confirmEditList } from './components/listUtilities.js';
import { showTaskModal, confirmTaskAdd, renderTasks, confirmEditTask, deleteTask } from './components/tasksUtilities.js';

// Lists selectors
const listModalBtn = document.querySelector('#add-list-modal');
const listConfirm = document.querySelector('#create-list-confirm');
const listCancel = document.querySelector('#create-list-cancel');
const editListConf = document.querySelector('#edit-list-confirm');
const editListCanc = document.querySelector('#edit-list-cancel');
// Tasks selectors
const taskModalBtn = document.querySelector('#add-task-btn');
const taskConfirm = document.querySelector('#create-task-confirm');
const taskCancel = document.querySelector('#create-task-cancel');
const editTaskConf = document.querySelector('#edit-task-confirm');
const editTaskCanc = document.querySelector('#edit-task-cancel');

// listener to display modals for adding or editing lists
listModalBtn.addEventListener('click', showListModal);

// List creation modal listeners
listConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    confirmListAdd();
});
listCancel.addEventListener('click', modalCancelBtn);

// List editing modal listeners
editListConf.addEventListener('click', (event) => {
    event.preventDefault();
    confirmEditList(event);
});
editListCanc.addEventListener('click', modalCancelBtn);

// Listener to disply modals for adding or editing tasks
taskModalBtn.addEventListener('click', showTaskModal);

// Task creation modal listeners
taskConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    confirmTaskAdd();
});
taskCancel.addEventListener('click', modalCancelBtn);

// Task editing modal listeners
editTaskConf.addEventListener('click', (event) => {
    event.preventDefault();
    confirmEditTask(event);
});
editTaskCanc.addEventListener('click', modalCancelBtn);

initLists();