console.log('Starting todos.js');

const fs = require('fs');

// add a todo item //
const addTodo = (title, id, status) => {
    var todos = fetchTodos();
    var status = addStatus();
    var id = getIdFromTable();
    var todo = {
        title,
        id, 
        status
    };

    var duplicatetodos = todos.filter((todo) => todo.title === title);

    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        // saveItems(todos);
        return todo;
    }
};

// add id //
const getIdFromTable = () => {
    var todos = fetchTodos();
    if(todos.length === 0) {
        return 1;
    } else {
        return todos.length + 1;
    }
};

// add status //
const addStatus = (status) => {
    var todos = fetchTodos();
    if(todos.length >= 0) {
        return ('to do');
    } 
};

// var saveDeleteItems = (todos) => {
//    fs.writeFileSync('zrobione-data.json', JSON.stringify(todos));
    
// };


// delete a todo item //
var deleteTodo = (title) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    saveDeleteItems(filteredtodos);
    return todos.length !== filteredtodos.length;
};

// read a todo item //
var readTodo = (title) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter((todo) => todo.title === title);
    return filteredTodos[0];
};

//listing all todos  //
var listTodos = () => {
    return fetchTodos();
};


var fetchTodos = () => {
    try {
        var todosString = fs.readFileSync('allTodos.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('allTodos.json', JSON.stringify(todos));
};

var logTodo = (todo) => {
    console.log('------');
    console.log(`Title todo : ${todo.title}`);
};

// exported functions
module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    logTodo,
    getIdFromTable,
    addStatus,
  

};