const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const ingredientsNumber = ingredients.length;
const ingredientsList = document.querySelector("#ingredients");
let fragment = document.createDocumentFragment();

for (let i = 0; i < ingredientsNumber; i += 1) {
	const ingredientsItem = document.createElement("li");
	ingredientsItem.textContent = ingredients[i];
	ingredientsItem.classList.add("item");
	fragment.appendChild(ingredientsItem);
}
ingredientsList.appendChild(fragment);
