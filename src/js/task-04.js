const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const spanEl = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener("click", () => {
	counterValue -= 1;
	spanEl.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
	counterValue += 1;
	spanEl.textContent = counterValue;
});
