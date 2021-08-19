const counter = document.querySelector("#counter");
const decBtn = counter.querySelector('[data-action="decrement"]');
const incBtn = counter.querySelector('[data-action="increment"]');
const valueRef = counter.querySelector("#value");

let counterValue = 0;

function increment() {
  counterValue += 1;
  setCounterValue();
}

function decrement() {
  counterValue -= 1;
  setCounterValue();
}

function setCounterValue() {
  valueRef.textContent = counterValue;
}

decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);
