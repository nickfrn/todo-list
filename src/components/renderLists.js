import edit from '../assets/pencil.png';
import del from '../assets/delete.png';

export function renderList(name) {
    const listDiv = document.createElement('div');
    listDiv.classList.add('list-item');

    const listName = document.createElement('h2');;
    listName.textContent = name;

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('list-icons');

    const editIcon = document.createElement('img');
    editIcon.src = edit;
    editIcon.classList.add('icon');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = del;
    deleteIcon.classList.add('icon');

    iconsDiv.append(editIcon, deleteIcon);
    listDiv.append(listName, iconsDiv);

    return listDiv;
}