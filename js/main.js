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
const list = document.querySelector(".js-list");

for (const task of tasks) {
    
    list.innerHTML += `<li><input id=${task.id} type="checkbox"><p>${task.name}</p></li>`
}

/*Cuando la usuaria haga click en la casilla de la tarea
    se tacha el texto
*/

const handleClickList =(event) => {
    const taskId = parseInt(event.target.id);
    if (!taskId) return;
    //list.classList.add("list");
    
};
/*const checkList = handleClickList.map((task) =>{
    console.log(checkList);
        
    //return taskId.classList.add ("list");

})
*/    

list.addEventListener ("click", handleClickList);
    





