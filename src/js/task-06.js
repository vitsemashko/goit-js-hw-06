const inputEl = document.querySelector("#validation-input");
const symbolsNumber = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onBlurValidation);

function onBlurValidation() {
	if (inputEl.textLength !== symbolsNumber) {
		inputEl.classList.add("invalid");
	} else {
		inputEl.classList.remove("invalid");
		inputEl.classList.add("valid");
	}
}
