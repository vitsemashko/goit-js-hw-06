const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
	spanEl.textContent = event.target.value;
	if (event.target.value === "") {
		spanEl.textContent = "Anonymous";
	}
});
