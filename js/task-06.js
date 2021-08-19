const input = document.querySelector("#validation-input");

input.addEventListener("blur", fnChange);

function fnChange({ target }) {
  if (target.value.length === Number(target.dataset.length)) {
    updateClass("valid", "invalid");
    // target.classList.add("valid");
    // target.classList.remove("invalid");
    return;
  }
  updateClass("invalid", "valid");
  // target.classList.remove("valid");
  // target.classList.add("invalid");
}

function updateClass(addcla, remcla) {
  input.classList.add(addcla);
  input.classList.remove(remcla);
}
