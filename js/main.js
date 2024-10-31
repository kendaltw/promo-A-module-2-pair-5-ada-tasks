"use strict";


const GITHUB_USER = "kendaltw";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const list = document.querySelector(".js-list");
let tasks = [];

fetch(SERVER_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        tasks = data.results;
        renderTasks();
    })

function renderTasks() {
    for (const task of tasks) {

        list.innerHTML += `<li><input id=${task.id} type="checkbox"><p>${task.name}</p></li>`
    }
}


/*Cuando la usuaria haga click en la casilla de la tarea
    se tacha el texto
*/

const handleClickList = (event) => {
    const taskId = parseInt(event.target.id);
    if (!taskId) return;
    const underline =
    //list.classList.add("list");

};
/*const checkList = handleClickList.map((task) =>{
    console.log(checkList);
        
    //return taskId.classList.add ("list");

})
*/

list.addEventListener("click", handleClickList);






