const regulator = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

regulator.addEventListener("input", changeText);

function changeText({ target }) {
  if (target.value) {
    text.style.fontSize = `${Number(target.value)}px`;
  }
}
