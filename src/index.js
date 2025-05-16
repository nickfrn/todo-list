import './styles/main.css';
import { showListModal, confirmListAdd, cancelListAdd, renderList, editList, deleteList } from './components/listUtilities.js';

const listModalBtn = document.querySelector('#addListModal');
const listConfirm = document.querySelector('#list-confirm');
const listCancel = document.querySelector('#list-cancel');

listModalBtn.addEventListener('click', showListModal);
listConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    confirmListAdd();
});

listCancel.addEventListener('click', cancelListAdd);