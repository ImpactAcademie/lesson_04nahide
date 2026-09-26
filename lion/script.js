const factButton = document.querySelector(".fact-button");
const factOutput = document.querySelector(".fact-output");

if (factButton && factOutput) {
	const facts = [
		"Les lions d’Asie vivent dans la forêt de Gir, dans l’ouest de l’Inde.",
		"Les lionnes d’un même groupe sont souvent apparentées.",
		"Le rugissement aide les lions à communiquer à grande distance.",
		"Les lions peuvent se reposer jusqu’à une grande partie de la journée."
	];
	let factIndex = 0;

	factButton.addEventListener("click", () => {
		factOutput.textContent = facts[factIndex];
		factIndex = (factIndex + 1) % facts.length;
	});
}