let resultBox = document.querySelector("#results-box");
console.log(resultBox);
function createCard(key, title, description, anchor) {
	resultBox.innerHTML += ` <div class="result-card">
	<div class="keyword">${key} </div>
	<div class="result-title">${title}</div>
	<div class="result-description">
		<p>${description}</p>
		<a class="result-link" target="blank" href="${anchor}">Leer
			más</a>
	</div>
</div>`;
}

createCard(
	"Everyone, digital transformation is the key",
	"WHAT IS DIGITAL TRANSFORMATION?",
	"Digital transformation is the opportunity for organizations to reinvent themselves through the use of digital technologies to improve processes in their value chains, their business and operational models and in their organizational structure.",
	"https://rosanarosas.com/transformacion-digital-empresas/"
);
createCard(
	"Everyone, The importance of Marketing today",
	"The importance of Marketing today",
	"Marketing tells us that companies must keep the market within them and not outside as usually happens, that is, it tells companies that they should not make any kind of decisions without first considering what the market needs.",
	"https://blogs.upc.edu.pe/blog-de-administracion-y-marketing/entorno/la-importancia-del-marketing-en-la-actualidad"
);
createCard(
	"Everyone, What is Digital Marketing",
	"What is the digital marketing?",
	"Today, the internet is incorporated into our lives in such a way that it is almost impossible to do anything without it. It is no coincidence that it is increasingly difficult to see people disconnected from their cell phones, having the internet at their fingertips . ",
	"https://www.rdstation.com/co/marketing-digital/"
);
createCard(
	"Everyone, How to use digital marketing to improve your business?",
	"How to use digital marketing to improve your business",
	"The main difference is that digital marketing can be done in a segmented way and so you can target exclusively the market sector that interests you. In this way, you will be able to get closer to your potential customers and have the possibility of satisfying their consumer expectations of goods and services in a more effective way. ",
	"https://www.friendslab.co/es/como-utilizar-el-marketing-digital-para-mejorar-tu-negocio"
);
createCard(
	"Everyone, what is advertising?",
	"What is the publicity?",
	"It is the branch that is responsible for creating strategies for brands, companies or organizations to publicize products and services or other objectives. Going into more detail about what can be advertising, we can declare that it is also a paid communication that appears in spaces assigned for her.",
	"https://blog.hubspot.es/marketing/definicion-publicidad"
);
createCard(
	"Everyone, what are social networks?",
	"What are social networks?",
	"Social networks, in the virtual world, are sites and applications that operate at different levels - such as professional, relationship, among others - but always allowing the exchange of information between people and / or companies.",
	"https://www.rdstation.com/es/redes-sociales/"
);
createCard(
	"How to use social media propertly?",
	"How to use social media propertly?",
	"Social networks on the Internet are part of our day to day. We share content with our friends, we publish photos of our vacations and we add our likes through likes and recommendations. In short, we make our life public, available to everyone.",
	"http://www.unilibre.edu.co/bogota/ul/noticias/noticias-universitarias/1877-como-usar-adecuadamente-las-redes-sociales"
);

const accordionItems = document.querySelectorAll(".result-card");
const resultsDiv = document.querySelector("#resultados_busqueda");
const form = document.querySelector(".buscador_pf");
const inputPreguntas = document.querySelector(".buscador_pf input");
const defaults = document.querySelectorAll(".default");
let value;
let dataToShow = [];

form.addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();
	value = inputPreguntas.value;

	const state = { page_id: 1, user_id: 5 };
	const title = "";
	const url = `?=${value}`;

	history.pushState(state, title, url);
	defaults.forEach(def => {
		def.style.display = "none";
	});

	removeChildren();
	showResults();
}

async function showResults() {
	let paramSplit = window.location.href.split("?=");

	const expA = /%c3%a1/g;
	const expE = /%c3%a9/g;
	const expI = /%c3%ad/g;
	const expO = /%c3%b3/g;
	const expU = /%c3%ba/g;

	let param = paramSplit[paramSplit.length - 1]
		.trim()
		.toLocaleLowerCase()
		.split("%20")
		.join(" ")
		.replace("%c2%bf", "")
		.replace(expA, "a")
		.replace(expO, "o")
		.replace(expU, "u")
		.replace(expE, "e")
		.replace(expI, "i");

	let arrayResults = await filterData(param);
	await noResult(dataToShow);
	arrayResults.forEach(res => {
		resultsDiv.appendChild(res);
	});
}

function filterData(param) {
	dataToShow = [];
	let nodoClonado;

	accordionItems.forEach(acc => {
		if (removeAccents(acc.firstElementChild.textContent.toLocaleLowerCase()).includes(param)) {
			nodoClonado = acc.cloneNode(true);
			dataToShow.push(nodoClonado);
		}
	});

	return dataToShow;
}

function removeChildren() {
	resultsDiv.innerHTML = "";
}

function noResult(arr) {
	if (arr.length === 0) {
		const div = document.createElement("div");
		const h3 = document.createElement("h3");
		h3.innerText = "No resources found with that word";
		div.appendChild(h3);
		div.setAttribute("class", "noencont");

		arr.push(div);
	}
}

const removeAccents = str => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

let cardsNew = document.querySelectorAll(".news-card");
let btnVerNews = document.querySelector(".loadmore");

btnVerNews.addEventListener("click", function () {
	cardsNew.forEach((card, index) => {
		if (index > 3) {
			card.style.display = "flex";
		}
	});
	btnVerNews.style.display = "none";
});
