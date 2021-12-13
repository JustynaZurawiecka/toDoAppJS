const tasksNumber = document.querySelector("h3 span");
const lis = document.querySelectorAll("li");
const inputSearch = document.querySelector("body input");
const ol = document.querySelector("ol");
const form = document.querySelector("form");
const inputAdd = document.querySelector("form input");

tasksNumber.textContent = lis.length;
let toDoList = [...lis];

//SEARCH
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasks);
    ol.textContent = "";
    tasks.forEach(li => ol.appendChild(li))
}

inputSearch.addEventListener('input', searchTask);

//REMOVE 
const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    let toDoListAfter = toDoList.splice(index, 1);

    renderList();
    tasksNumber.textContent = toDoList.length;
}

document.querySelectorAll("li button").forEach(li => li.addEventListener('click', removeTask));

//ADD TASKS TO LIST
const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;
    if (titleTask === "") return;

    const task = document.createElement("li");
    task.innerHTML = titleTask + "<button>DELETE</button>";
    toDoList.push(task);

    tasksNumber.textContent = toDoList.length;
    renderList();

    inputAdd.value = "";

    document.querySelectorAll("li button").forEach(li => li.addEventListener('click', removeTask));
}

const renderList = () => {
    ol.textContent = "";
    toDoList.forEach((toDoElem, key) => {
        toDoElem.dataset.key = key;
        toDoElem.id = key;
        ol.appendChild(toDoElem);
    })
}

form.addEventListener('submit', addTask);








