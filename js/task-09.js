const changeButton = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector("span.color");

changeButton.addEventListener("click", getRandomHexColor);
function getRandomHexColor() {
	let randomColor = `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
	body.setAttribute("style", `background-color: ${randomColor}`);
	colorValue.textContent = randomColor;
}
