# To-do List, jugando con el DOM!

Con esta práctica vamos a fortalecer nuestro conocimiento acerca de los eventos
en Javascript y como manipular el DOM. 

## Información previa

Vamos a realizar una to-do-list, de manera que un usuario pueda introducir un texto en el input,
y mediante un botón, agregar una nueva tarea a la lista. Además, el usuario dispondra,
de un botón para editar, borrar o completar una tarea. 


Recuerda que puedes ayudarte del temario en todo momento o consultar en internet.

## Iteración 1
En esta primera iteración debes crear un nuevo elemento li en el DOM mediante la función addToDo. Este elemento debe ser hijo del elemento
ya existente en el DOM con id "list" y debe llevar la clase "task" .Además a
este elemento deberas añadirle los siguientes elementos:

- El texto introducido por el usuario en el input.
- Un botón Editar: Debe crearse en la función addEditBtnElement y tener un listener para el evento click, que dispare la función editElement.
- Un botón Done: Debe crearse en la función addDoneBtnElement y tener un listener para el evento click, que dispare 
la función doneElement.
- Un botón Borrar: Debe crearse en la función addDeleteBtnElement y tener un listener para el evento click, que dispare
  la función deleteElement.  
   
## Iteración 2
Implementa la función deleteElement, la cual recibe un evento y debe eliminar del DOM
el li correspondiente al evento emitido. 
## Iteración 3
Implementa la función doneElement, la cual recibe un evento y debe cambiar el color de background
del elemento li correspondiente a verde.
## Iteración 4
Mediante las funciones editElement y saveElement, implementa la siguiente funcionalidad: 
![](https://media.giphy.com/media/mugKogY7PWRlpaPf3s/giphy.gif)

## Iteración 5
Comprueba que tanto al crear, como al editar una tarea, el usuario esta introduciendo texto
y no deja el campo input vacio. Si el campo esta vacio, mostrar un mensaje alert que advierta
al usuario. 

## Bonus

Añade transiciones y animaciones al añadir o borrar una nueva tarea, utiliza los estilos css ya existentes y 
añade los que necesites