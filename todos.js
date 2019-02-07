const fs = require('fs');

const addTodo = (title, status) => {

    const todos = fetchTodos();
    const id = getIdFromArray();

    const todo = {
        title,
        id, 
        status
    };

    const findDuplicatedToDos = todos.filter((todo) => todo.title === title);

    if (findDuplicatedToDos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
    } else {
        console.log("this todo is duplicated so will not be saved")
    }
};

const getIdFromArray = () => {
    const todos = fetchTodos();
    if(todos.length === 0) {
        return 1;
    } else {
        return todos.length + 1;
    }
};

const deleteTodo = (title) => {
    const todos = fetchTodos();
    const filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);
};


const readTodo = (title) => {
    const todos = fetchTodos();
    const filteredTodos = todos.filter((todo) => todo.title === title);
    return filteredTodos[0];
};

const filterTodosByStatus = (status) => {
    const todos = fetchTodos();
    const filteredTodos = todos.filter((todo) => todo.status === status);
    return filteredTodos;
};

const changeStatus = (title, status)=> {
    let todos = fetchTodos();
    let todosingle = todos.filter((todo) => todo.title === title);
  
    let singestatus= (todosingle.map(a => a.status));
    console.log(todosingle);
    console.log(singestatus);
    todosingle.singestatus === status;
    saveTodos(todos);
}

const listTodos = () => {
    return fetchTodos();
};

const fetchTodos = () => {
    try {
        const todosString = fs.readFileSync('allTodos.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

const saveTodos = (todos) => {
    fs.writeFileSync('allTodos.json', JSON.stringify(todos));
};


module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    filterTodosByStatus,
    changeStatus
};