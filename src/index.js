import './styles/main.css';
import { initLists, showListModal, confirmListAdd, modalCancelBtn, deleteList, confirmEditList } from './components/listUtilities.js';
import { showTaskModal } from './components/tasksUtilities.js';

const listModalBtn = document.querySelector('#add-list-modal');
const listConfirm = document.querySelector('#create-list-confirm');
const listCancel = document.querySelector('#create-list-cancel');
const editListConf = document.querySelector('#edit-list-confirm');
const editListCanc = document.querySelector('#edit-list-cancel');
const taskModalBtn = document.querySelector('#add-task-btn');

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

initLists();