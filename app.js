console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const todos = require('./todos.js');

const argv = yargs.argv;
const command = argv._[0];

console.log('Your Command: ', command);

if (command === 'addTodo') {

    const title = argv._[1];
    const status = argv._[2];

    todos.addTodo(title, status);

} else if (command === 'deleteTodo') {

    const title = argv._[1];

    const todoToBeDeleted = todos.readTodo(title) ;
    if (todoToBeDeleted != null) {
        todos.deleteTodo(title);
        console.log('todo Deleted');
    } else {
        console.log('there is no such todo')
    }

} else if (command === 'readTodo') {

    const title = argv._[1];

    const todo = todos.readTodo(title);
    if (todo != null) {
        console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status);
    } else {
        console.log('there is no such todo');
    }

} else if (command === 'listTodos') {

    const allTodos = todos.listTodos();
    console.log(`Printing ${allTodos.length} todo(s). \n`);
    allTodos.forEach((todo) => console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status + '\n'));

} else if (command === 'filterTodosByStatus') {

    const status = argv._[1];
    const filteredTodos = todos.filterTodosByStatus(status);
    filteredTodos.forEach((todo) => console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status + '\n'));

} else if (command === 'changeStatus') {
    const title = argv._[1];
    const status = argv._[2];
    const change = todos.changeStatus(title, status);
    console.log(change);
    // if (change != null) {
    //     console.log('your todo: \ntitle: ' + todo.title + '\nstatus: ' + todo.status);
    // } else {
    //     console.log('there is no such todo to change status');
    // }
} else {
    console.log('wrong command');
}