let blueButton = document.createElement("button");
let greenButton = document.createElement("button");
let redButton = document.createElement("button");
let allSquare = document.createElement("div");

function ObjectStyleControl() {
  blueButton.innerHTML = "Create Blue Button";
  blueButton.style.margin = "5px";
  blueButton.style.borderRadius = "5px";
  blueButton.style.backgroundColor = "blue";
  blueButton.style.color = "white";

  greenButton.innerHTML = "Create Green Button";
  greenButton.style.margin = "5px";
  greenButton.style.borderRadius = "5px";
  greenButton.style.backgroundColor = "green";
  greenButton.style.color = "white";

  redButton.innerHTML = "Create Red Button";
  redButton.style.margin = "5px";
  redButton.style.borderRadius = "5px";
  redButton.style.backgroundColor = "red";
  redButton.style.color = "white";

  allSquare.style.padding = "10px";
  allSquare.className = "all-square";
  allSquare.style.display = "flex";
  allSquare.style.flexWrap = "wrap";
  allSquare.style.gap = "7px";
}

ObjectStyleControl();

function CreateSquare(color) {
  switch (color) {
    case "blue":
      let blueSquare = document.createElement("div");

      blueSquare.style.width = "100px";
      blueSquare.style.height = "100px";
      blueSquare.style.backgroundColor = "blue";

      allSquare.appendChild(blueSquare);
      break;
    case "green":
      let greenSquare = document.createElement("div");

      greenSquare.style.width = "100px";
      greenSquare.style.height = "100px";
      greenSquare.style.backgroundColor = "green";

      allSquare.appendChild(greenSquare);
      break;

    case "red":
      let redSquare = document.createElement("div");

      redSquare.style.width = "100px";
      redSquare.style.height = "100px";
      redSquare.style.backgroundColor = "red";

      allSquare.appendChild(redSquare);
      break;
  }
}

blueButton.addEventListener("click", function () {
  CreateSquare("blue");
});

greenButton.addEventListener("click", function () {
  CreateSquare("green");
});

redButton.addEventListener("click", function () {
  CreateSquare("red");
});

document.body.appendChild(blueButton);
document.body.appendChild(greenButton);
document.body.appendChild(redButton);
document.body.appendChild(allSquare);
