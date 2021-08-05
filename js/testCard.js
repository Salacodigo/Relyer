/*let inputs = document.querySelectorAll('div.card');
console.log(inputs);
//window.onload = inicio();


for(let value of inputs){
    console.log(value);
    value.addEventListener('change', function (){
        console.log('a');
    })
}

function inicio(){
}


for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('change', updateValue);
}


function inicio() {
    let dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
    let idRespuestas = JSON.parse(localStorage.getItem("idRespuestas"));
    if (dataRespuestas != null) {
        alert('Se han cargado las respuestas que tenias antes de cerrar la pagina');

        for (let i = 0; i < dataRespuestas.length; i++) {
            let contador = i+1
            if (dataRespuestas[i] != null) {
                console.log(idRespuestas[i]);
                document.getElementById(idRespuestas[i]).checked = true;
            }
        }
    } else {
        console.log('No hay respuestas marcadas');
    }
}

function updateValue(e) {
    let dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
    let idRespuestas = JSON.parse(localStorage.getItem("idRespuestas"));
    console.log(e.srcElement.value + " " + e.srcElement.name);
    if (dataRespuestas == null) {
        console.log('a');
        localStorage.setItem('respuestas', JSON.stringify(respuestas));
        localStorage.setItem('idRespuestas', JSON.stringify(respuestas));
        dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
        idRespuestas = JSON.parse(localStorage.getItem("idRespuestas"));
    }
    for (let i = 0; i < cantidad_preguntas; i++) {
        if (e.srcElement.name == 'card' + i) {
            dataRespuestas[i] = e.srcElement.value;
            idRespuestas[i] = e.srcElement.id;
            console.log(dataRespuestas);
            localStorage.setItem('respuestas', JSON.stringify(dataRespuestas));
            localStorage.setItem('idRespuestas', JSON.stringify(idRespuestas));
            break;
        }
    }
    for (let j = 0; j < cantidad_preguntas; j++) {
        if (dataRespuestas[j] != null) {
            preguntas_contestadas++;
        }
    }
    console.log(preguntas_contestadas);
    if (preguntas_contestadas == 1) {
        barra_progreso.style.width = '20%'
    }
    else if (preguntas_contestadas == 2) {
        barra_progreso.style.width = '40%'
    }
    else if (preguntas_contestadas == 3) {
        barra_progreso.style.width = '60%'
    }
    else if (preguntas_contestadas == 4) {
        barra_progreso.style.width = '80%'
    }
    else if (preguntas_contestadas == 5) {
        barra_progreso.style.width = '100%'
    }
}*/
