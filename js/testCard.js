
const questions = [
    {
        pregunta: "¿Conoces las herramientas disponibles para digitalizar tu negocio?",
        respuestas: {
            a: "Desconozco qué herramientas puedo utilizar",
            b: "Tengo una idea al respecto, pero no me he informado",
            c: "Conozco las herramientas que se utilizan en mi sector",
            d: "Estoy al tanto de las nuevas tendencias que podrían afectar a mi negocio"
        }
    },
    {
        pregunta: "¿Qué importancia tienen los datos en la estrategia y forma de hacer negocio de su comercio?",
        respuestas: {
            a: "Desconozco el valor que los datos pueden aportar a mi negocio",
            b: "Considero que puede aportar gran valor, pero desconozco la forma en que puedo recogerlos y sacarle provecho para mi negocio",
            c: "Tenemos planteados algunos procesos para su recogida y almacenamiento",
            d: "Tenemos una estrategia integral de gestión y tratamiento del dato, de gran relevancia en la toma de decisiones de la empresa",
        }
    },
    {
        pregunta: "¿Cuáles de estos canales digitales empleas en tu negocio?",
        respuestas: {
            a: "Ninguno",
            b: "Página web o redes sociales",
            c: "Aplicación móvil",
            d: "Blogs o plataformas de terceros"
        }
    },
    {
        pregunta: "¿Utilizas estos canales digitales para la promoción de tu negocio?",
        respuestas: {
            a: "No",
            b: "Ofrezco información básica de mi negocio",
            c: "Llevo a cabo campañas de publicidad",
            d: "Me comunico con los clientes"
        }
    },
    {
        pregunta: "¿Que canales digitales usas para relacionarte con tus clientes?",
        respuestas: {
            a: "Ninguno",
            b: "Recojo y analizo datos de las características generales de los clientes",
            c: "Ofrezco servicios post venta y atención a los clientes",
            d: "Involucro a los clientes en el diseño de productos y/o servicios"
        }
    },
    {
        pregunta: "¿Utilizas estos canales digitales para vender tus productos y/o servicios?",
        respuestas: {
            a: "No",
            b: "Presento el catálogo de productos y/o servicios",
            c: "Permito realizar pedidos y/o reservas online",
            d: "Permito realizar el seguimiento del estado de los pedidos"
        }
    },
    {
        pregunta: "¿Cuáles de las siguientes herramientas dispones en tu negocio para la comunicación y colaboración con tus clientes?",
        respuestas: {
            a: "Correo electrónico",
            b: "Mensajería instantánea",
            c: "Vídeo conferencia",
            d: "Otros",
        }
    },
    {
        pregunta: "Que acciones se practican en tu negocio, para hacer domicilios",
        respuestas: {
            a: "N/A (no hacemos domicilios)",
            b: "Venta en tiendas de terceros (marketplaces, etc.)",
            c: "Envío a domicilio mensajero empleado",
            d: "Envío a domicilio plataformas"
        }
    },

    {
        pregunta: "¿Qué tipo de dispositivos y recursos se utilizan en tu negocio?",
        respuestas: {
            a: "Ninguno",
            b: "Móvil",
            c: "Tablet",
            d: "Ordenador portátil"
        }

    },

    {
        pregunta: "¿Cuál de las siguientes herramientas digitales son utilizadas para la gestión de tu negocio?",
        respuestas: {
            a: "Ninguna",
            b: "Herramientas ofimáticas",
            c: "Herramientas de gestión de contabilidad",
            d: "Herramientas de Administración de procesos y recursos – ERP"
        }

    }

]



// let respuestas = [];
// let input = document.querySelectorAll('input');
// let cantidad_preguntas = 5;
// let preguntas_contestadas = 0;
// let barra_progreso = document.getElementsByClassName('barra')[0];
// window.onload = inicio();

// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener('change', updateValue);
// }

// function inicio() {
//     console.log('a');
//     let dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
//     if (dataRespuestas != null) {
//         alert('Se han cargado las respuestas que tenias antes de cerrar la pagina');

//         for (let i = 0; i < dataRespuestas.length; i++) {
//             if (dataRespuestas[i] != null) {
//                 document.getElementById(dataRespuestas[i] + '.' + i).checked = true;
//             }
//         }
//     } else {
//         console.log('No hay respuestas marcadas');
//     }
// }

// function updateValue(e) {
//     let dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
//     console.log(e.srcElement.value + " " + e.srcElement.name);
//     if (dataRespuestas == null) {
//         console.log('a');
//         localStorage.setItem('respuestas', JSON.stringify(respuestas));
//         dataRespuestas = JSON.parse(localStorage.getItem("respuestas"));
//     }
//     for (let i = 0; i < cantidad_preguntas; i++) {
//         if (e.srcElement.name == 'card' + i) {
//             dataRespuestas[i] = e.srcElement.value;
//             console.log(dataRespuestas);
//             localStorage.setItem('respuestas', JSON.stringify(dataRespuestas));
//             break;
//         }
//     }
//     for (let j = 0; j < cantidad_preguntas; j++) {
//         if (dataRespuestas[j] != null) {
//             preguntas_contestadas++;
//         }
//     }
//     console.log(preguntas_contestadas);
//     if (preguntas_contestadas == 1) {
//         barra_progreso.style.width = '20%'
//     }

//     else if (preguntas_contestadas == 2) {
//         barra_progreso.style.width = '40%'
//     }
//     else if (preguntas_contestadas == 3) {
//         barra_progreso.style.width = '60%'
//     }
//     else if (preguntas_contestadas == 4) {
//         barra_progreso.style.width = '80%'
//     }
//     else if (preguntas_contestadas == 5) {
//         barra_progreso.style.width = '100%'
//     }
// }


const radioAnswers = document.querySelectorAll('.card input')
const questionCard = document.getElementsByClassName('card')
let activeCardCounter = 0

radioAnswers.forEach(answer => {
    answer.addEventListener('click', () => {
        goToNextQuestion()
        changeActiveCard()
    })
});

// IF USER CLICK ANY ANSWER GO TO THE NEXT QUESTION AUTOMATICALLY
function goToNextQuestion() {
    let screenPosition = window.screenY
    window.scrollBy(0, screenPosition + 250)
}

// CHANGE THE OPACITY OF THE CURRENT QUESTION , HIDE THE ONES NOT USED
function changeActiveCard() {
    questionCard[activeCardCounter].classList.remove('active')
    questionCard[activeCardCounter + 1].classList.add('active')
    activeCardCounter++
}
