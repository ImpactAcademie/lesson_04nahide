const signalDescriptions = {
	ears: "Des oreilles plaquées peuvent signaler de la peur ou de l’inconfort. Laisse-lui de l’espace et évite de le toucher.",
	tail: "Une queue qui fouette peut indiquer de l’agacement ou une forte concentration. Observe le reste de son corps avant d’interagir.",
	purr: "Le ronronnement accompagne souvent un moment de bien-être, mais certains chats ronronnent aussi lorsqu’ils sont stressés ou souffrants.",
	"slow-blink": "Un clignement lent est souvent associé à un état détendu. Tu peux répondre en clignant doucement des yeux, sans t’approcher davantage."
};

const signalSelect = document.querySelector("#signal-select");
const signalResult = document.querySelector("#signal-result");

if (signalSelect && signalResult) {
	signalSelect.addEventListener("change", () => {
		signalResult.textContent = signalDescriptions[signalSelect.value];
	});
}