let startTest = document.getElementsByClassName("button__startest")[0];
startTest.addEventListener("click", () => {
	if (logged === false) {
		printMessage("#FFE1DE", "#F47174", `Login to do test`, "error");
	} else {
		window.location.href = "./testquestions.html";
	}
});

let cards = document.querySelectorAll(".card");
let tiempo = 1000;

function cardsUp() {
	for (let i = 0; i < cards.length; i++) {
		setTimeout(() => {
			cards[i].classList.toggle("arriba");
		}, tiempo);
		tiempo = tiempo + 1000;
	}
}
setInterval(() => cardsUp(), 5);
