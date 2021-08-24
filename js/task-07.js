const regulator = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

regulator.addEventListener("input", changeText);

function changeText({ target }) {
  text.style.fontSize = `${target.value * 2}px`;
}
