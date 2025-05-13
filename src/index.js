import './styles/main.css';
import { showListModal, confirmListAdd, cancelListAdd } from './components/addList.js';
import { renderList } from './components/renderLists.js';

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

    // WIP, CHANGE LATER TO A SINGLE FUNCTION FOR DRY
    listContainer.innerHTML = '';
    lists.forEach((list) => {
        let rendered = renderList(list.name);
        console.log(list.name);
        console.log(typeof list.name);

        listContainer.appendChild(rendered);
        console.log(list.name);
    });
    
});

listCancel.addEventListener('click', cancelListAdd);