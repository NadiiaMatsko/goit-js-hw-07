const list = document.querySelector("#categories");
const arrayOfCategory = list.querySelectorAll(".item");
console.log(`В списке ${arrayOfCategory.length} категории.`);

arrayOfCategory.forEach((category) => {
  const h2 = category.querySelector("h2");
  const array = category.querySelectorAll("li");
  console.log(`Категория: ${h2.textContent}
  Количество элементов: ${array.length}`);
});
