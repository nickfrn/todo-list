export function createList(name = 'Default') {
    const id = crypto.randomUUID();
    
    const tasksList = [];

    const getTasks = () => tasksList;

    return {id, name, getTasks};
}