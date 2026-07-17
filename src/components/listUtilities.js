import { createList } from "./objects.js";
import edit from '../assets/pencil.png';
import del from '../assets/delete.png';

let lists = [];

const listModal = document.querySelector('#createListDialog');
const editListModal = document.querySelector('#editListDialog');
const listContainer = document.querySelector('#lists-container');

// Inner function to refresh the UI when a change is made to the lists
function refreshListUI() {
    listContainer.innerHTML = '';
    lists.forEach((list) => {
        let rendered = renderList(list);
        listContainer.appendChild(rendered);
    });
}

// Function to initialize Default list
export function initLists() {
    if (lists.length === 0) {
        const defaultList = createList('Default');
        lists.push(defaultList);
    }

    refreshListUI();
}

export function showListModal(event) {
    if (event.target.id === 'add-list-modal') {
        listModal.showModal();
    } else if (event.target.getAttribute('data-type') === 'edit-list') {
        editListModal.showModal();
    } 
}

export function confirmListAdd() {
    const name = document.querySelector('#list-name');
    const newList = createList(name.value);

    lists.push(newList);
    name.value = ''; // Clear field for next iteration
    listModal.close();

    refreshListUI();
}

export function modalCancelBtn(event) {
    event.preventDefault();

    // Find closest dialog to the cancel btn and close it
    const parentDialog = event.target.closest('dialog');

    if (parentDialog) {
        parentDialog.close();
    }
}

export function renderList(list) {
    // Create list item
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    listItem.setAttribute('data-id', list.id);

    // Add name to list item
    const listName = document.createElement('button');;
    listName.textContent = list.name;
    listName.classList.add('list-btn');

    // Add edit and delete icons to the list item
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('list-icons');

    const editIcon = document.createElement('img');
    editIcon.src = edit;
    editIcon.classList.add('icon');
    editIcon.classList.add('edit');
    editIcon.setAttribute('data-type', 'edit-list');
    editIcon.addEventListener('click', showListModal);

    const deleteIcon = document.createElement('img');
    deleteIcon.src = del;
    deleteIcon.classList.add('icon');
    deleteIcon.classList.add('delete');
    deleteIcon.addEventListener('click', deleteList);

    iconsDiv.append(editIcon, deleteIcon);
    listItem.append(listName, iconsDiv);

    return listItem;
}

export function deleteList(event) {
    let listItem = event.target.closest('.list-item');
    let listId = listItem.getAttribute('data-id');

    lists = lists.filter((list) => list.id !== listId);

    refreshListUI();

    return lists;
}

export function confirmEditList(event) {
    let listItem = event.target.closest('.list-item');
    let listId = listItem.getAttribute('data-id');
    let listIndex = lists.findIndex(list => list.id === listId);
    let newName = document.querySelector('#new-list-name').value;

    lists[listIndex].name = newName;

    editListModal.close();

    refreshListUI();
}