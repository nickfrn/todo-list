export function createList(name) {
    const tasksList = [];

    const getTasks = () => tasksList;

    return {name, getTasks};
}