let resultBox = document.querySelector('#results-box');
console.log(resultBox);
function createCard (key,title,description,anchor){
	resultBox.innerHTML += ` <div class="result-card">
	<div class="keyword">${key} </div>
	<div class="result-title">${title}</div>
	<div class="result-description">
		<p>${description}</p>
		<a class="result-link" target="blank" href="${anchor}">Leer
			más</a>
	</div>
</div>`
console.log(key)
}

createCard("todos transformación digital que tecnologia clave"," ¿QUÉ ES LA TRANSFORMACIÓN DIGITAL?","La transformación digital es la oportunidad que tiene las organizaciones de reinventarse a través del uso de tecnologías digitales para mejorar los procesos en sus cadenas de	valor, sus modelos empresariales y operacionales y en su estructura organizativa.","https://rosanarosas.com/transformacion-digital-empresas/");
createCard("todos La importancia del Marketing en la actualidad","La importancia del Marketing en la actualidad","El marketing nos dice que las empresas deben de mantener el mercado dentro de ellas y no fuera como usualmente ocurre, es decir, expresa a las empresas que no deberían tomar ningún tipo de decisiones sin considerar antes qué es lo que el mercado necesita.","https://blogs.upc.edu.pe/blog-de-administracion-y-marketing/entorno/la-importancia-del-marketing-en-la-actualidad");
createCard("todos Qué es el Marketing Digital","¿Qué es el Marketing Digital?","Hoy en día, el internet está incorporado a nuestra vida de tal manera que es casi imposible hacer cualquier cosa sin ella. No es casualidad que es cada vez más difícil ver a las personas desconectadas de sus celulares, teniendo internet al alcance de los dedos.","https://www.rdstation.com/co/marketing-digital/");
createCard("todos ¿Cómo utilizar el marketing digital para mejorar tu negocio?","Cómo utilizar el marketing digital para mejorar tu negocio","La principal diferencia es que el marketing digital se puede hacer de manera segmentada y así puedes dirigirte exclusivamente al sector de mercado que te interesa. De esta forma, podrás acercarte más a tus clientes potenciales y tendrás la posibilidad de satisfacer sus expectativas de consumo de bienes y servicios de un modo más efectivo.","https://www.friendslab.co/es/como-utilizar-el-marketing-digital-para-mejorar-tu-negocio");
createCard("todos ¿Qué es la publicidad?","¿Qué es la publicidad?","Es la rama que se encarga de crear estrategias para que las marcas, empresas u organizaciones den a conocer productos y servicios u otros objetivos. Entrando en más detalle sobre lo que puede ser publicidad, podemos declarar que también es una comunicación pagada que aparece en espacios asignados para ella.","https://blog.hubspot.es/marketing/definicion-publicidad");
createCard(" todos ¿Qué son las redes sociales?","¿Qué son las redes sociales?","Las redes sociales, en el mundo virtual, son sitios y aplicaciones que operan en niveles diversos – como el profesional, de relación, entre otros – pero siempre permitiendo el intercambio de información entre personas y/o empresas.","https://www.rdstation.com/es/redes-sociales/");
createCard("todos ¿Cómo usar adecuadamente las redes sociales?","¿Cómo usar adecuadamente las redes sociales?","Las redes sociales en Internet forman parte de nuestro día a día. Compartimos contenidos con nuestros amigos, publicamos fotografías de nuestras vacaciones y volcamos nuestros gustos a través de me gustas y recomendaciones. En definitiva, hacemos nuestra vida pública, al alcance de todos.","http://www.unilibre.edu.co/bogota/ul/noticias/noticias-universitarias/1877-como-usar-adecuadamente-las-redes-sociales");






	const accordionItems = document.querySelectorAll('.result-card');
	const resultsDiv = document.querySelector('#resultados_busqueda');
	const form = document.querySelector('.buscador_pf');
	const inputPreguntas = document.querySelector('.buscador_pf input');
	const defaults = document.querySelectorAll('.default');
	let value;
	let dataToShow = [];

	form.addEventListener('submit', submitForm);

	function submitForm(e){
		e.preventDefault();
		value = inputPreguntas.value;
		
		const state = { 'page_id': 1, 'user_id': 5 };
		const title = '';
		const url = `?=${value}`;
		
		history.pushState(state, title, url);
		defaults.forEach(def => {
			def.style.display = "none";
		});

		removeChildren();
		showResults();

	}
	
	async function showResults(){
		let paramSplit = window.location.href.split("?=");
		
		const expA = /%c3%a1/g;
		const expE = /%c3%a9/g;
		const expI = /%c3%ad/g;
		const expO = /%c3%b3/g;
		const expU = /%c3%ba/g;
		
		let param = paramSplit[paramSplit.length - 1].trim().toLocaleLowerCase().split("%20").join(" ").replace("%c2%bf", "").replace(expA, "a").replace(expO, "o").replace(expU, "u").replace(expE, "e").replace(expI, "i");
		
		
		let arrayResults = await filterData(param);
		await noResult(dataToShow);
		arrayResults.forEach(res => {
			resultsDiv.appendChild(res);
		})
		
	}
	
	function filterData(param){
		dataToShow = [];
		let nodoClonado;
        
		accordionItems.forEach(acc => {
				if(
removeAccents(acc.firstElementChild.textContent.toLocaleLowerCase()).includes(param)
				){
				nodoClonado = acc.cloneNode(true);
				dataToShow.push(nodoClonado);
				}
			
			
		})
		
		return dataToShow;
	}
	
	function removeChildren(){
		resultsDiv.innerHTML = "";
	}
	
	function noResult(arr){
		if(arr.length === 0){
				const div = document.createElement('div');
				const h3 = document.createElement('h3');
				h3.innerText = 'No se encontraron recursos con esa palabra';
				div.appendChild(h3);
				div.setAttribute("class", "noencont");
				
				arr.push(div);  
			}
	}

	const removeAccents = (str) => {
  		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	} 



let cardsNew = document.querySelectorAll('.news-card');
let btnVerNews = document.querySelector('.loadmore');

btnVerNews.addEventListener('click', function (){
	cardsNew.forEach((card,index) => {
		if (index > 3){
			card.style.display = 'flex';
		}
	})
	btnVerNews.style.display = 'none';
});



