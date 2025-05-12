import { createList } from "./objects.js";

const listModal = document.querySelector('#listDialog');

export function showListModal() {
    listModal.showModal();
}

export function confirmListAdd(event) {
    event.preventDefault();

    const name = document.querySelector('#list-name');
    const newList = createList(name);

    listModal.close();

    return newList;
}

export function cancelListAdd(event) {
    event.preventDefault();
    listModal.close();
}