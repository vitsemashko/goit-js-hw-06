const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");
const listMarkup = (item) => {
	return `<li class="item">${item}</li>`;
};
const render = ingredients.map(listMarkup).join("");
list.insertAdjacentHTML("beforeend", render);
