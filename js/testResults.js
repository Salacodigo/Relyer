// Se definen las variables que buscan elementos en el html y el id del usuario
let tabla = document.getElementById('tabla');
let score = document.getElementById('score');
let explicacion = document.getElementById('explicacion');
let container = document.getElementsByClassName('container')[0];
let id = 5;

//Metodo para conseguir resultados enviando en el query el id
const conseguirResults = () => {
    fetch("https://server-relyer.herokuapp.com/api/results/id/?id="+id, {
    }).then(response => response.json())
        .then(data => {
            //Se llama a la funcion para escribir sobre el html enviando como parametro el ultimo campo de los resultados que coincidan con el id de usuario
            escribir(data.results[(data.results.length - 1)]);
        }).catch(message_error => console.log('F' + message_error))
}

//Se llama el metodo conseguirResultados
conseguirResults();

//Metodo para escribir sobre el html
function escribir(results) {
    //Se le da al score el valor almacenado en la base de datos
    score.innerHTML = results.totalScore;
    // Se crean condicionales para mostrar diferente mensaje segun el puntaje
    if (parseInt(results.totalScore) >= 378) {
        explicacion.innerHTML = 'Tu nivel de madurez digital se encuentra bajo. La forma de relacionarse con los clientes está cambiando, y no abordar la transformación digital de tu negocio es una barrera importante a tu desarrollo empresarial… ¡Es el momento de comenzar! En este nivel de madurez, la dimensión no sólo está completamente desarrollada, sino que la empresa se encuentra en la capacidad de influir sobre nuevos conocimientos referente a ella y puede ser un multiplicador de sus prácticas a otros.'
    } else if (parseInt(results.totalScore) >= 630) {
        explicacion.innerHTML = 'Estás en un nivel medio de madurez digital. Te encuentras en pleno proceso de transición entre el comercio convencional y el digital… ¡Es el momento de seguir creciendo!  en este nivel de madurez las dimensiones se encuentran en una etapa desarrollada y presentan características más allá de lo que se espera o se encuentra en el mercado.'
    } else if (parseInt(results.totalScore) >= 945) {
        explicacion.innerHTML = 'Estás a punto de alcanzar el máximo nivel de digitalización. En este momento, tu único propósito debe ser mejorar… ¡La digitalización de tu comercio no tiene límites! No sólo son básicas, sino que se ha adquirido una consciencia de sí mismas y empiezan una evolución. Se ha habilitado la compatibilidad con lectores de pantalla.'
    }
    //Se crea un for del tamaño del array answers el cual se recorre la cantidad de veces que hayan respuestas para asi escribir sobre la tabla
    for (let i = 0; i < results.answers.length; i++) {
        tabla.innerHTML += '<tr><th>' + results.questionsId[i] + '</th></tr>'
        tabla.innerHTML += '<tr><td>' + results.answers[i] + '</td></tr>'
    }
}