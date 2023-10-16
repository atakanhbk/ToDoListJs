let todoCreateForm = document.createElement("form");
let inputText = document.createElement("input");
let showInputText = document.createElement("button");
let toDoListCardParent = document.createElement("div");

function CreateTask() {
  let toDoListCard = document.createElement("div");
  toDoListCardParent.appendChild(toDoListCard);
  toDoListCard.style.width = "100px";
  toDoListCard.style.height = "100px";
  toDoListCard.style.border = "2px solid black";
  toDoListCard.style.margin = "10px";
  toDoListCard.innerHTML = `${inputText.value}`;
  toDoListCard.style.color = "white";
  toDoListCard.style.display = "flex";
  toDoListCard.style.alignItems = "center";
  toDoListCard.style.justifyContent = "center";
  toDoListCard.style.backgroundColor = "red";
}

function ObjectStyleControl() {
  showInputText.innerHTML = "Show Input";

  toDoListCardParent.style.display = "flex";
  toDoListCardParent.style.flexWrap = "wrap";
  toDoListCardParent.style.gap = "10px";
}

function OnSubmitFunction(e) {
  e.preventDefault();
  console.log("On submit");
}

function AddEventListenerFunc() {
  showInputText.addEventListener("click", function () {
    CreateTask();
  });

  todoCreateForm.addEventListener("submit",OnSubmitFunction)
}

function AppendChildFunc() {
  document.body.appendChild(todoCreateForm);
  todoCreateForm.appendChild(inputText);
  todoCreateForm.appendChild(showInputText);
  todoCreateForm.appendChild(toDoListCardParent);
}

ObjectStyleControl();
AddEventListenerFunc();
AppendChildFunc();
