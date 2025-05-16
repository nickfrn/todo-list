import './styles/main.css';
import { showListModal, confirmListAdd, cancelListAdd, deleteList, confirmEditList } from './components/listUtilities.js';

const listModalBtn = document.querySelector('#add-list-modal');
const listConfirm = document.querySelector('#create-list-confirm');
const listCancel = document.querySelector('#create-list-cancel');
const editListConf = document.querySelector('#edit-list-confirm');
const editListCanc = document.querySelector('edit-list-cancel');

listModalBtn.addEventListener('click', showListModal);
listConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    confirmListAdd();
});

listCancel.addEventListener('click', cancelListAdd);

editListConf.addEventListener('click', (event) => {
    event.preventDefault();
    confirmEditList(event);
});