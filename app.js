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
  toDoListCard.innerHTML = "ATAKAN";
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

function AddEventListenerFunc() {
  showInputText.addEventListener("click", function () {
    CreateTask();
  });
}

function AppendChildFunc() {
  document.body.appendChild(inputText);
  document.body.appendChild(showInputText);
  document.body.appendChild(toDoListCardParent);
}

ObjectStyleControl();
AddEventListenerFunc();
AppendChildFunc();
