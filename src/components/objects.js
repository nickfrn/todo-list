export function createList(name = 'Default') {
    const id = crypto.randomUUID();
    const tasksList = [];

    const getTasks = () => tasksList;

    return { id, name, getTasks };
}

export function createTask(title, description, priority, dueDate) {
    const id = crypto.randomUUID();

    return { 
        id: id, 
        title: title, 
        desc: description, 
        priority: priority, 
        dueDate: dueDate 
    };
}