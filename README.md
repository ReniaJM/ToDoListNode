# ToDoList App
Jak korzystamy z aplikacji:

*Dodawanie zadan:

node app.js addTodo "...zadanie" status(done, notDone, continues)

np: node app.js addTodo "umyc psa" notDone


*Usuwanie zadan:

node app.js deleteTodo "...zadanie" 
np: node app.js deleteTodo "umyc psa"

*Listowanie wszystkich zadan:

node app.js listTodos  
Pokarze sie lista wszystch zadan, przyklad:


your todo:
title: umyj samochód
status: done


*Listowanie zadan po statusie (done, notDone, continues);

np: node app.js filterTodosByStatus done


