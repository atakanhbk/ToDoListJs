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
  toDoListCardParent.className = "todo-parent";

  createToDo.type = "submit";

  clearAllTodo.innerHTML = "Clear All Todo";
  clearAllTodo.style.backgroundColor = "red";
  clearAllTodo.type = "button";
}

window.addEventListener("beforeunload",function () {
  localStorage.setItem("0",JSON.stringify(toDoListCardList));
})


window.addEventListener("load" , function () {
  toDoListCardList = JSON.parse(localStorage.getItem("0"));


  for (let i = 0; i < toDoListCardList.length; i++) {
    console.log(toDoListCardList[i]);
    
    let deleteButton = document.createElement("button");
    DeleteButtonStyle(deleteButton);
    let toDoListCard = document.createElement("div");
    let toDoListCardText = document.createElement("span");

    toDoListCardParent.appendChild(toDoListCard);
    ToDoListCardStyle(toDoListCard);
    toDoListCard.innerHTML = `${toDoListCardList[i]}`

    toDoListCard.appendChild(toDoListCardText);
    toDoListCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", DeleteToDo);

   
    inputText.value = "";

  }
})

function CreateTask() {
  if (inputText.value === "") {
    alert("Please Enter Any Value");
  } else {
    let deleteButton = document.createElement("button");
    DeleteButtonStyle(deleteButton);
    let toDoListCard = document.createElement("div");
    let toDoListCardText = document.createElement("span");

    toDoListCardParent.appendChild(toDoListCard);
    ToDoListCardStyle(toDoListCard);


    toDoListCard.appendChild(toDoListCardText);
    toDoListCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", DeleteToDo);

    toDoListCardList.push(inputText.value);
    inputText.value = "";
    
  }
}

function SubmitFunction(e) {
  e.preventDefault();

  CreateTask();
}

function ClearAllList() {
  while (toDoListCardParent.firstChild) {
    toDoListCardParent.removeChild(toDoListCardParent.lastChild);
    toDoListCardList = [];
  
  }
}

function DeleteToDo(e) {
  const deleteButtonParent = e.target.parentElement;
  const indexOfList = toDoListCardList.indexOf(deleteButtonParent.textContent);
  toDoListCardList.splice(indexOfList, 1);
  deleteButtonParent.remove();
  
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
  cardStyle.wordBreak = "break-word";
  cardStyle.overflow = "hidden";
  cardStyle.padding = "10px";
  cardStyle.position = "relative";
}

function DeleteButtonStyle(object) {
  const deleteButtonStyle = object.style;
  deleteButtonStyle.width = "10px";
  deleteButtonStyle.height = "10px";
  deleteButtonStyle.position = "absolute";
  deleteButtonStyle.top = "0";
  deleteButtonStyle.right = "0";
  object.type = "button";
}

function AddEventListenerFunc() {
  todoCreateForm.addEventListener("submit", SubmitFunction);
  clearAllTodo.addEventListener("click", ClearAllList);
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
