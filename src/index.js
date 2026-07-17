import './styles/main.css';
import { initLists, showListModal, confirmListAdd, cancelListAdd, deleteList, confirmEditList } from './components/listUtilities.js';

const listModalBtn = document.querySelector('#add-list-modal');
const listConfirm = document.querySelector('#create-list-confirm');
const listCancel = document.querySelector('#create-list-cancel');
const editListConf = document.querySelector('#edit-list-confirm');
const editListCanc = document.querySelector('#edit-list-cancel');

// listener to display modals for adding or editing lists
listModalBtn.addEventListener('click', showListModal);

// Confirm and cancel listeners on list creation modal
listConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    confirmListAdd();
});
listCancel.addEventListener('click', cancelListAdd);

editListConf.addEventListener('click', (event) => {
    event.preventDefault();
    confirmEditList(event);
});

initLists();