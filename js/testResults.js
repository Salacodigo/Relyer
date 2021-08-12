import { CountUp } from "./countUp.min.js";

let resultContainer = document.getElementsByClassName("results")[0];
let graphicContainer = document.getElementsByClassName("results__graphic")[0];
let characterName = document.getElementsByClassName("character__name")[0];
let chacterImg = document.getElementsByClassName("character__img")[0];
let scoreMobile = document.getElementsByClassName("data__punctuation--mobile")[0];
let resultData = document.getElementsByClassName("results__data")[0];
let dataCharacter = document.getElementsByClassName("data__character")[0];
let punctuation = document.getElementsByClassName("punctuation")[0];
let dataResults = document.getElementsByClassName("data__desc")[0];
let id = localStorage.getItem("userId");
console.log(id);

//Metodo para conseguir resultados enviando en el query el id
!(async function conseguirResults() {
	try {
		let reqresults = await fetch("https://server-relyer.herokuapp.com/api/results/id/?id=" + id, {});
		let response = await reqresults.json();
		console.log(response);
		// GET THE TOTALSCORE OF THE LAST TEST MADE BY AN USER
		let totalScore = response.results[response.results.length - 1].totalScore;
		printResults(totalScore);
	} catch (error) {
		console.error(error);
	}
})();

const changeBgColor = () => {
	window.addEventListener("resize", () => {
		if (window.innerWidth < 1000) {
			resultData.classList.add("unset");
		} else {
			if (resultData.classList.contains("unset")) resultData.classList.remove("unset");
		}
	});
};

//Metodo para printResults sobre el html
function printResults(score) {
	changeBgColor();
	let resultColor = "white";
	let dataColor = "white";
	let finalScore = score / 10;
	// let finalScore = 90;
	if (finalScore > 100) finalScore = 100;
	let restScore = (1200 - score) / 10;
	scoreMobile.innerHTML = "Your score is " + finalScore + "/100 ";
	// DIFFERENT LEVELS ACCORDING TO YOUR SCORE

	const options = {
		duration: 7,
	};

	let demo = new CountUp(punctuation, finalScore, options);

	if (!demo.error) {
		demo.start();
	} else {
		console.error(demo.error);
	}

	if (finalScore <= 20) {
		characterName.innerHTML += "<b>starfish</b>";
		chacterImg.src = "../assets/test/starfish.webp";
		resultColor = `background: #ff4646;
        background: linear-gradient(194deg, #ff4646 30%, #63011f 100%);
        `;
		dataColor = `background: #000D2D;
        background: linear-gradient(180deg, #000D2D 0%, #00081A 30%);
        `;
		dataResults.innerHTML +=
			"You have just started your path in technology, and we are happy that you want to start this journey. However big challenges are about to come, and there are big players outside, that's why we are here to guide you, and remember... it's never too late to start, is too late to wait!";
	} else if (finalScore <= 40) {
		characterName.innerHTML += "<b>Jellyfish</b>";
		chacterImg.src = "../assets/test/jellyfish.webp";
		resultColor = `background: #FF5A46;
        background: linear-gradient(194deg, #FF5A46 30%, #FF985A 100%);
        `;
		dataColor = `background: #600012;
        background: linear-gradient(180deg, #600012 0%, #130004 35%);
        `;
		dataResults.innerHTML +=
			"A jellyfish is just rising, and started to realize what tech can do: the potential to be bigger and accomplish the goals you've pursued. Digital presence, marketing and branding are scaring but knowing you're going to do it is even scarier, let's face this challenge together! ";
	} else if (finalScore <= 65) {
		characterName.innerHTML += "<b>Crab</b>";
		chacterImg.src = "../assets/test/crab.webp";
		resultColor = `background: #e0be00;
        background: linear-gradient(194deg, #e0be00 30%, #ccda07 100%);
        `;
		dataColor = `background: #000F33;
        background: linear-gradient(180deg, #000F33 0%, #000615 40%);
        `;
		dataResults.innerHTML +=
			"You are a medium crab that has started it's process to change things for good, you are in the transition between convencional and digital commerce... It's time to keep growing! Now that you've entered into this world we want to show you what CMR's, publicity, and a digital strategy can do for you; don't worry, we will help you in this process. You are not alone...... ";
	} else if (finalScore <= 85) {
		characterName.innerHTML += "<b>Mermaid</b>";
		chacterImg.src = "../assets/test/mermaid.webp";
		resultColor = `background: #00e0af;
        background: linear-gradient(194deg, #00e0af 30%, #07a9da 100%);
        `;
		dataColor = `background: #001F60;
        background: linear-gradient(180deg, #001F60 0%, rgba(0, 16, 34, 1) 30%);
        `;

		dataResults.innerHTML +=
			"A beautiful mermaid that has overcome a lot of obstacles using the technology, you are about to reach the maximum level to finally get the max potential of tech in your company. We know that you are reaching the top of the building and that technologies as data science, personalized software management systems, high quality marketing and others can help you be there... let's find experts to do that";
	} else {
		characterName.innerHTML += "<b>Dolphin</b>";
		chacterImg.src = "../assets/test/dolphin.webp";
		resultColor = `background: #04f3a3;
        background: linear-gradient(194deg, #04f3a3 0%, rgba(7, 218, 187, 1) 100%);
        `;
		dataColor = `background: rgb(2, 25, 68);
        background: linear-gradient(180deg, rgba(2, 25, 68, 1) 17%, rgba(0, 16, 34, 1) 35%);
        `;
		dataResults.innerHTML +=
			"You are at the very high status in the sea, you have become a wise dolphin using the technology for you, keep going and don't forget to be constantly checking for the new technologies that are coming, we are here to help you continue your amazing process and guide you in the future, congratulations! ... ";
	}

	resultContainer.setAttribute("style", resultColor);
	graphicContainer.setAttribute("style", resultColor);
	resultData.setAttribute("style", dataColor);
	dataCharacter.setAttribute("style", dataColor);
}
