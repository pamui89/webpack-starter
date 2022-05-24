import './styles.css';
import {ToDo, ToDoList} from './classes';

const toDoList = new ToDoList();
const tarea = new ToDo('Aprender JavaScript');
const tarea2 = new ToDo('Comprar un unicornio');

toDoList.nuevoToDo(tarea);
toDoList.nuevoToDo(tarea2);

console.log (tarea);
console.log (tarea2);
console.log (toDoList);