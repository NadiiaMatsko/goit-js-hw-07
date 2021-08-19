const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

input.addEventListener("input", changeName);

// console.log(input);

function changeName({ target }) {
  let text = "незнакомец";
  if (target.value) {
    text = target.value;
  }
  outputName.textContent = text;
}
