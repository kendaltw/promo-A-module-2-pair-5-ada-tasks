"use strict";


const GITHUB_USER = "kendaltw";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const list = document.querySelector(".js-list");
const taskName = document.querySelector(".js-task");
const button = document.querySelector(".js-button");
const addTask = document.querySelector(".js-add-task");
let tasks = [];

fetch(SERVER_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        tasks = data.results;
        renderTasks();


    })
const savedTasks = JSON.parse(localStorage.getItem("taskName"));




function renderTasks() {
    for (const task of tasks) {

        const liElement = document.createElement("li");
        list.appendChild(liElement);

        const taskElement = document.createElement("input");
        liElement.appendChild(taskElement);
        taskElement.setAttribute("type", "checkbox");

        const listNames = document.createTextNode(task.name);
        liElement.appendChild(listNames);
    }
}


/* Cuando la usuaria haga click:
    - recoger la tarea que ha escrito
    - pintarla en el listado

*/
function addClick(ev) {
    ev.preventDefault();
    const taskInput = addTask.value;
    console.log(taskInput);
    renderTasks.push({
        name: taskInput,
        completed: false,
    })
    

}




  /*const addClick = (event) => {
    event.preventDefault();
    const nameTask = {
    name: taskName.value,
    completed: false,
}};
//     list.innerHTML += `<li><input type="checkbox"><p>${(nameTask)}</p></li>`
//     console.log(nameTask);
//     localStorage.setItem("nameTask", JSON.stringify(nameTask));
//     const savedTasks = JSON.parse(localStorage.getItem("nameTask"));
// }
//no funciona stringify: seguir desde aquí









/*Cuando la usuaria haga click en la casilla de la tarea
    se tacha el texto
*/

const handleClickList = (event) => {
    const taskId = parseInt(event.target.id);
    if (!taskId) return;
    //const underline =
    //list.classList.add("list");

}

/*const checkList = handleClickList.map((task) =>{
    console.log(checkList);
        
    //return taskId.classList.add ("list");

})
*/

list.addEventListener("click", handleClickList);



button.addEventListener("click", addClick);








