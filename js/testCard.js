
let respuestas = [];
let input = document.querySelectorAll('input');
let cantidad_preguntas = 5;
let preguntas_contestadas = 0;
let barra_progreso = document.getElementsByClassName('barra')[0];
window.onload = inicio();

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('change', updateValue);
}

/*$(document).ready(function(){
    let ancho=$('.barra').width();
    console.log(ancho);
});*/

function inicio() {
    console.log('a');
    let dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
    if (dataRespuestas != null) {
        alert('Se han cargado las respuestas que tenias antes de cerrar la pagina');

        for (let i = 0; i < dataRespuestas.length; i++) {
            if (dataRespuestas[i] != null) {
                document.getElementById(dataRespuestas[i] + '.' + i).checked = true;
            }
        }
    } else {
        console.log('No hay respuestas marcadas');
    }
}

function updateValue(e) {
    let dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
    console.log(e.srcElement.value + " " + e.srcElement.name);
    if (dataRespuestas == null) {
        console.log('a');
        localStorage.setItem('respuestas', JSON.stringify(respuestas));
        dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
    }
    for (let i = 0; i < cantidad_preguntas; i++) {
        if (e.srcElement.name == 'card' + i) {
            dataRespuestas[i] = e.srcElement.value;
            console.log(dataRespuestas);
            localStorage.setItem('respuestas', JSON.stringify(dataRespuestas));
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
}