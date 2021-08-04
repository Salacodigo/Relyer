
	const accordionItems = document.querySelectorAll('.result-card');
	const resultsDiv = document.querySelector('#resultados_busqueda');
	const form = document.querySelector('.buscador_pf');
	const inputPreguntas = document.querySelector('.buscador_pf input');
	let value;
	let dataToShow = [];
	console.log(accordionItems[0].firstElementChild.textContent);
	form.addEventListener('submit', submitForm);

	function submitForm(e){
		e.preventDefault();
		value = inputPreguntas.value;
		
		const state = { 'page_id': 1, 'user_id': 5 };
		const title = '';
		const url = `?=${value}`;
		
		history.pushState(state, title, url);
		
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
		
		console.log(param);
		
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
				div.setAttribute("class", "text-center");
				
				arr.push(div);  
			}
	}

	const removeAccents = (str) => {
  		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	} 
