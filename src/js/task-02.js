const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const elementsList = document.createElement("li");
elementsList.textContent = ingredients;

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.innerHTML = markup;

// Old exemple
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const itemIngredientsList = document.querySelector("#ingredients");

// const creatItemIngredientsList = (items) => {
//   return items.map((item) => {
//     const itemIngredients = document.createElement("li");
//     itemIngredients.textContent = item;
//     itemIngredients.classList.add("item");

//     return itemIngredients;
//   });
// };

// const elements = creatItemIngredientsList(ingredients);

// itemIngredientsList.append(...elements);
