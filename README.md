# ToDoList App
Jak korzystamy z aplikacji:

*Dodawanie zadań:

node app.js addTodo "...zadanie" status(done, notDone, continues)

np: node app.js addTodo "umyć psa" notDone


*Usuwanie zadań:

node app.js deleteTodo "...zadanie" 
np: node app.js deleteTodo "umyć psa"

*Listowanie wszystkich zadań:

node app.js listTodos  
Pokarze się lista wszystkich zadań, przykład:

//
your todo:
title: umyj samochód
status: done
//

*Listowanie zadań po statusie (done, notDone, continues);

np: node app.js filterTodosByStatus done

Wypisze listę zadań z danym statusem 

Zmiana statusu 
np: node app.js changeStatus "umyć psa" done
