console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const todos = require('./todos.js');

const argv = yargs.argv;
const command = argv._[0];

console.log('Your Command: ', command);

if (command === 'addTodo') {

    let title = argv._[1];
    let status = argv._[2];

    todos.addTodo(title, status);

} else if (command === 'deleteTodo') {

    let title = argv._[1];

    let todoToBeDeleted = todos.readTodo(title) ;
    if (todoToBeDeleted != null) {
        todos.deleteTodo(title);
        console.log('todo Deleted');
    } else {
        console.log('there is no such todo')
    }

} else if (command === 'readTodo') {

    let title = argv._[1];

    let todo = todos.readTodo(title);
    if (todo != null) {
        console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status);
    } else {
        console.log('there is no such todo');
    }

} else if (command === 'listTodos') {

    let allTodos = todos.listTodos();
    console.log(`Printing ${allTodos.length} todo(s). \n`);
    allTodos.forEach((todo) => console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status + '\n'));

} else if (command === 'filterTodosByStatus') {

    let status = argv._[1];
    let filteredTodos = todos.filterTodosByStatus(status);
    filteredTodos.forEach((todo) => console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status + '\n'));

} else if (command === 'changeStatus') {
    let title = argv._[1];
    let status = argv._[2];
    let change = todos.changeStatus(title, status);
    console.log(change);
    if (change != null) {
        console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status);
    } else {
        console.log('there is no such todo to change status');
    }
} else {
    console.log('wrong command');
}