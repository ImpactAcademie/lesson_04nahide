const elephantFacts = [
	"La trompe d’un éléphant contient des dizaines de milliers de muscles.",
	"Les éléphants communiquent aussi avec des sons très graves, parfois inaudibles pour nous.",
	"Le bain de poussière aide à protéger leur peau du soleil et des insectes.",
	"Les éléphants peuvent reconnaître des membres de leur famille après une longue séparation."
];

document.querySelectorAll(".fact-button").forEach((button) => {
	button.addEventListener("click", () => {
		const output = document.getElementById(button.getAttribute("aria-controls"));
		const nextFact = elephantFacts[Math.floor(Math.random() * elephantFacts.length)];
		output.textContent = nextFact;
	});
});