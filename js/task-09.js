const refs = {
	changeButton: document.querySelector("button.change-color"),
	body: document.querySelector("body"),
	colorValue: document.querySelector("span.color"),
};
refs.changeButton.addEventListener("click", addColorToBodyAndSpan);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function addColorToBodyAndSpan() {
	let randomColor = getRandomHexColor();
	refs.body.setAttribute("style", `background-color: ${randomColor}`);
	refs.colorValue.textContent = randomColor;
}
