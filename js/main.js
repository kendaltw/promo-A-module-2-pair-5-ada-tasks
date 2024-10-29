"use strict";

const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
        id: 4,
    },
];

/*
Por cada elemento de la lista
pintar la tarea en el html
*/
const list = (".list");

for (const task of tasks) {
    console.log(task)
    list.innerHTML += `$<li>{task}</li>`
}



