const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const categoriesElements = document.querySelectorAll("li.item");
categoriesElements.forEach((categori) => {
  console.log(`Category: ${categori.firstElementChild.textContent}`);
  console.log(`Elements: ${categori.lastElementChild.children.length}`);
});
