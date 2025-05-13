export function createList(name = 'Default') {
    const tasksList = [];

    const getTasks = () => tasksList;

    return {name, getTasks};
}