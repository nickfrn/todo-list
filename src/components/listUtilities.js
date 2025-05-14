import { createList } from "./objects.js";
import edit from '../assets/pencil.png';
import del from '../assets/delete.png';

const listModal = document.querySelector('#createListDialog');

export function confirmListAdd() {
    const name = document.querySelector('#list-name');
    const newList = createList(name.value);

    listModal.close();

    return newList;
}

export function cancelListAdd(event) {
    event.preventDefault();
    listModal.close();
}

export function renderList(list) {
    const listDiv = document.createElement('div');
    listDiv.classList.add('list-item');
    listDiv.setAttribute('data-id', list.id);

    const listName = document.createElement('h2');;
    listName.textContent = list.name;

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('list-icons');

    const editIcon = document.createElement('img');
    editIcon.src = edit;
    editIcon.classList.add('icon');
    editIcon.classList.add('edit');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = del;
    deleteIcon.classList.add('icon');
    deleteIcon.classList.add('delete');

    iconsDiv.append(editIcon, deleteIcon);
    listDiv.append(listName, iconsDiv);

    return listDiv;
}

export function showListModal() {
    listModal.showModal();
}

export function deleteList(listsArray) {

}

export function editList() {

}