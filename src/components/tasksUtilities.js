import { createTask } from "./objects";

const taskModal = document.querySelector('#createTaskDialog');

export function showTaskModal(event) {
    if (event.target.id === 'add-task-btn') {
        taskModal.showModal();
    }
}