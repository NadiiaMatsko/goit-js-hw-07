const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulRef = document.querySelector("#ingredients");
const list = ingredients.map((ingr) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingr;
  return listRef;
});
ulRef.append(...list);
console.log(ulRef);
