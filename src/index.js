import './styles/main.css';
import { showListModal, confirmListAdd, cancelListAdd, renderList, editList, deleteList } from './components/listUtilities.js';

const lists = [];

const listModalBtn = document.querySelector('#addListModal');
const listConfirm = document.querySelector('#list-confirm');
const listCancel = document.querySelector('#list-cancel');
const listContainer = document.querySelector('#lists-container');

listModalBtn.addEventListener('click', showListModal);
listConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    
    let newList = confirmListAdd();

    lists.push(newList);

    listContainer.innerHTML = '';
    lists.forEach((list) => {
        let rendered = renderList(list);
        listContainer.appendChild(rendered);
    });
});

listCancel.addEventListener('click', cancelListAdd);