// get the varialbles is--

const err = document.querySelector(".error")
const inputtask = document.getElementById("input-task")

const addtaskbtn = document.querySelector("#add-task")

const inputsearch = document.getElementById("Search-task")
const tasklist = document.querySelector(".task-list")
const clearall = document.querySelector(".btn-cleare")

// console.log(err,inputtask,addtaskbtn,inputsearch,tasklist,clearall)

// i atarted the main javascript

//add a task
addtaskbtn.addEventListener("click", function(e) {
    e.preventtDefault()
    console.log("hello")
})
// function addTaskFun(e) {
//     e.preventtDefault()
//     console.log("hello")
// }
// get out i/p value and trim
//create a new li
//create input failes -> type of text, disable, class name of disabled task
// put the input trim value into the disable task i/[]
// put the i/p filed that contin the task into the new li
