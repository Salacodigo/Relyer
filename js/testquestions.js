// SAVE QUESTIONS WITH RELATED ANSWERS AND SCORE
let questions;
let possibleAnswers;
// DOM VARIABLES
let cardContainer = document.getElementsByClassName("card__container")[0];
let possibleAnswersContainer = document.getElementsByClassName("card__optionscontainer");
let submitTest = document.getElementById("terminar-test");

(async function getQuestions() {
	try {
		let request = await fetch("https://server-relyer.herokuapp.com/api/questions/");
		let response = await request.json();
		questions = response.questions;
		getAnswers();
	} catch (error) {
		console.error(error);
	}
})();

async function getAnswers() {
	try {
		let request = await fetch("https://server-relyer.herokuapp.com/api/answers/");
		let response = await request.json();
		possibleAnswers = response.answers;
		printQuestions(questions, possibleAnswers);
	} catch (error) {
		console.error(error);
	}
}

function printQuestions(questions, possibleAnswers) {
	let matchedQuestions;
	// INDICATES THE AMOUNT OF CARD QUESTI0NS PRINTED SO FAR
	let wrapperCounter = 0;

	// LETS PRINT EACH QUESTION
	questions.forEach(question => {
		// LETS FIND ALL THE QUESTION OPTIONS THAT BELONGS TO AN SPECIFIC QUESTION
		matchedQuestions = possibleAnswers.filter(answer => answer.questionId === question.uid);
		// ALL TYPES OF QUESTION HAVE THE SAME WRAPPER
		let cardWrapper = `
        <div class="carditem">
            <h2 class="card__question"> ${question.question}</h2>
            <div class="card__optionscontainer" id="card${wrapperCounter}"></div>
        </div>`;

		cardContainer.innerHTML += cardWrapper;
		createCardElement(wrapperCounter, matchedQuestions, question.type);
		wrapperCounter++;
	});
}

function createCardElement(i, questions, questiontype) {
	let inputType, questionSelected;
	let cardOptionWrapper = document.getElementsByClassName("card__optionscontainer")[i];
	let counter = 1;

	questions.forEach(value => {
		questiontype === "0" ? (inputType = "radio") : (inputType = "checkbox");

		// THERE ARE DIFFERENT TYPE OF QUESTIONS
		// TYPE 0 : SINGLE ANSWER QUESTIONS => THEY MAY OR MAY NOT HAVE AN "OTHER" OPTION
		// TYPE 1 : MULTIPLE ANSWER QUESTIONS   => NO "OTHER" OPTION AT THE END
		// TYPE 2 : MULTIPLE ANSWER QUESTIONS   => INCLUDES "OTHER" OPTION AT THE END

		// NORMAL QUESTION CAN BE EITHER MADE WITH RADIUS OR CHECKBOX
		let normalQuestion = `
    <input type="${inputType}" class="checkbox" id="${value.uid}" name="card${i}" value="${value.answer}">
    <label for="${value.uid}" class="respuestas2"> ${value.answer} </label><br>
    `;
		// OTHER OPTION CARD ADDS AN INPUT WHERE THE PERSON CAN TYPE
		let OtherOption = `
    <input type="${inputType}" onchange="Checked(${i})" class="radio" id="${value.uid}" name="card${i}" value="${value.answer}">
    <label for="${value.uid}" class="respuestas2 ">${value.answer}</label><br>
    <input type="text" id="${value.uid}" disabled class="textInput" id="text${i}" name="card${i}">
    `;
		// QUESTIONS WITH VALUE "NO "OR NONE, OR NOTHING
		let noOption = `
    <input type="${inputType}" onchange="Checked2(${i},'${value.uid}')" class="checkbox" id="${value.uid}" name="card${i}" value="${value.answer} ">
    <label for="${value.uid}" class="respuestas2"> ${value.answer} </label><br>
    `;

		questionSelected = normalQuestion;

		if (value.answer == "Ninguno" || value.answer == "No" || value.answer == "Ninguna") questionSelected = noOption;

		if ((questiontype === "0" && value.answer == "Otros (Especifique)") || (questiontype === "2" && counter == questions.length)) {
			questionSelected = OtherOption;
		}

		cardOptionWrapper.innerHTML += `
		<div class="cardoption__item">
			${questionSelected}
		</div>
		`;
		counter++;
	});
}

// ENABLE THE OTHER OPTION INPUT TEXT AND DISABLE THE REST OF INPUTS
function Checked(counter) {
	// SEARCH A GROUP OF POSSIBLE ANSWERS OF A CARD QUESTION
	let inputs = document.getElementsByName("card" + counter);
	let lastPosition = inputs.length - 1;

	inputs.forEach(value => {
		value.checked = false;
	});
	inputs[lastPosition - 1].checked = true;
	inputs[lastPosition].disabled = false;

	// DISABLE THE OTHERS OPTION IF ANY OF THE PREVIOUS IS PRESSED
	for (let i = 0; i < lastPosition - 1; i++) {
		inputs[i].addEventListener("change", function () {
			if (this.checked) {
				inputs[lastPosition - 1].checked = false;
				inputs[lastPosition].disabled = true;
			}
		});
	}
}

// UNCHECK INPUTS IF NONE OR NOTHING INPUT US CHECK AND THE OTHER WAY AROUND
function Checked2(counter, questionId) {
	// SEARCH A GROUP OF POSSIBLE ANSWERS OF A CARD QUESTION
	let inputs = document.getElementsByName("card" + counter);
	let id = document.getElementById(questionId);

	inputs.forEach(element => (element.checked = false));
	id.checked = true;
	// DISABLE "NO" INPUT IF OTHER INPUT IS CHECKED
	inputs.forEach((element, index) => {
		if (index === 0) return;
		element.addEventListener("change", function () {
			if (this.checked) {
				id.checked = false;
			}
		});
	});
}

// SENDING THE RESULTS
const sendResult = async data => {
	try {
		let sendRes = await fetch("https://server-relyer.herokuapp.com/api/results/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (sendRes.ok) {
			window.location.href = "./results.html";
		} else {
			throw new Error("Error sending the answers");
		}
	} catch (error) {
		console.error(error);
	}
};

// VARS TO SEND IN USER DATA
let sendQuestionList = [];
let sendAnswerList = [];
let score = [];
let usuarioId = "8";

const validAllQuestionsAnswered = () => {
	// VALIDATE IF THERE IS AT LEAST AN ANSWER PER QUESTION
	for (let question of possibleAnswersContainer) {
		let validation = document.getElementsByName(question.id);
		let allQuestionsAnswered = false;
		validation.forEach(value => {
			if (value.checked) allQuestionsAnswered = true;
		});
		if (!allQuestionsAnswered) return false;
	}
	return true;
};

submitTest.addEventListener("click", async () => {
	let validation = validAllQuestionsAnswered();
	if (!validation) return alert("No se han completado todas las respuestas");
	// END VALIDATION

	// IF SEND SUBMIT AGAIN CLEAN THE ARRAY TO SEND
	sendQuestionList = [];
	sendAnswerList = [];
	score = [];

	let questionTitle = document.querySelectorAll("h2");
	// VALIDATE CORRECT SUBMIT AND SEND
	for (let i = 0; i < possibleAnswersContainer.length; i++) {
		let validation = document.getElementsByName("card" + i);
		let arrayTemp = [];
		let guardar = false;
		validation.forEach(value => {
			if (
				(value.type == "checkbox" && value.checked && value.value != "Otros") ||
				(value.type == "radio" && value.checked && value.value != "Otros (Especifique)") ||
				(value.type == "text" && !value.disabled && value.value)
			) {
				arrayTemp.push(value.value);
				score.push(value.id);
				guardar = true;
			}
		});

		// IF SAVE IS TRUE PUSH ANSWERS AND ITS CORRESPONDING ANSWERS
		if (guardar && guardar != "0") {
			sendAnswerList.push(arrayTemp.toString());
			sendQuestionList.push(questionTitle[i].innerHTML);
		} else {
			return alert("Please fill the inputs");
		}
	}

	// OBJECT TO BE SENT TO STORE THE RESULTS
	let userData = {
		questionsId: sendQuestionList,
		answers: sendAnswerList,
		score: score,
		usuarioId: usuarioId,
	};

	sendResult(userData);
});

const sideBar = document.getElementsByClassName("sidebar")[0];

// ON SCROLL ANIMATION , THE OPACITY OF THE LEFT SIDE BAR CHANGES ACCORDING TO THE SCROLL MADE
window.onscroll = function (e) {
	let totalHeight = document.body.scrollHeight - document.documentElement.scrollHeight * 0.07;
	let currentHeight = document.documentElement.scrollTop;
	let percentage = (currentHeight * 100) / totalHeight;
	sideBar.style.opacity = 0.3 + 0.7 * (percentage / 100);
};
