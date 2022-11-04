const refs = {
	btnDecrement: document.querySelector(`[data-action="decrement"]`),
	btnIncrement: document.querySelector(`[data-action="increment"]`),
	spanEl: document.querySelector("#value"),
};
let counterValue = 0;

const onClickCounter = (e) => {
	if (e.target.attributes[1].nodeValue === "decrement") {
		counterValue -= 1;
	} else {
		counterValue += 1;
	}
	refs.spanEl.textContent = counterValue;
};

refs.btnDecrement.addEventListener("click", onClickCounter);
refs.btnIncrement.addEventListener("click", onClickCounter);
