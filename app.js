let todoCreateForm = document.createElement("form");
let inputText = document.createElement("input");
let createToDo = document.createElement("button");
let toDoListCardParent = document.createElement("div");
let clearAllTodo = document.createElement("button");

let toDoListCardList = [];

function ObjectStyleControl() {
  createToDo.innerHTML = "Show Input";

  toDoListCardParent.style.display = "flex";
  toDoListCardParent.style.flexWrap = "wrap";
  toDoListCardParent.style.gap = "10px";
  toDoListCardParent.className="todo-parent";

  createToDo.type = "submit";

  clearAllTodo.innerHTML = "Clear All Todo";
  clearAllTodo.style.backgroundColor = "red";
  clearAllTodo.type = "button"
}

function CreateTask(e) {
  e.preventDefault();

  if (inputText.value === "") {
    alert("Please Enter Any Value");
  } else {
    let toDoListCard = document.createElement("div");
    let toDoListCardText = document.createElement("span");

    toDoListCardParent.appendChild(toDoListCard);
    ToDoListCardStyle(toDoListCard);

    toDoListCard.appendChild(toDoListCardText);
    toDoListCardList.push(inputText.value);
    console.log(toDoListCardList);
    inputText.value = "";
  }
}

function ClearAllList() {
  while (toDoListCardParent.firstChild) {
    toDoListCardParent.removeChild(toDoListCardParent.lastChild);
    toDoListCardList = [];
  }
}

function ToDoListCardStyle(card) {
  const cardStyle = card.style;
  cardStyle.width = "100px";
  cardStyle.height = "100px";
  cardStyle.border = "2px solid black";
  cardStyle.margin = "10px";
  card.innerHTML = `${inputText.value}`;
  cardStyle.color = "white";
  cardStyle.display = "flex";
  cardStyle.alignItems = "center";
  cardStyle.justifyContent = "center";
  cardStyle.backgroundColor = "white";
  cardStyle.color = "black";
  cardStyle.wordBreak =  "break-word"; 
  cardStyle.overflow = "hidden";
  cardStyle.padding = "10px";
}


function AddEventListenerFunc() {
  todoCreateForm.addEventListener("submit", CreateTask);
  clearAllTodo.addEventListener("click",ClearAllList);
}

function AppendChildFunc() {
  document.body.appendChild(todoCreateForm);
  todoCreateForm.appendChild(inputText);
  
  todoCreateForm.appendChild(createToDo);
  todoCreateForm.appendChild(clearAllTodo);
  todoCreateForm.appendChild(toDoListCardParent);

  

  inputText.maxLength = "20";
}

ObjectStyleControl();
AddEventListenerFunc();
AppendChildFunc();
