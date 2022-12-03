
const button = document.querySelector("button");
const body = document.querySelector("body");
let index = 0;

const colors = ["red", "blue", "orange", "purple", "pink"];
button.addEventListener("click", changeColors);

function changeColors() {
  body.style.backgroundColor = colors[index++];
  if (index > colors.length - 1) {
    index = 0;
  }
}
