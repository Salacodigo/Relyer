// Se definen los array que contendran questions, answers y score
let questions;
let answers;
let score = [];
//Se definen variables que hacen referencia a elementos del html
let contenedor = document.getElementById('cards')
let contenedorOpciones = document.getElementsByClassName('opciones');
let button = document.getElementById('terminar-test')

//metodo para conseguir las preguntas
const conseguirQuestions = () => {
    fetch("https://server-relyer.herokuapp.com/api/questions/", {
    }).then(response => response.json())
        .then(data => {
            // Se le da a la variable questions el resultado de la peticion, seguidamente se llama al metodo conseguirAnswers
            questions = data.questions;
            conseguirAnswers();
        }).catch(message_error => console.log('F' + message_error))
}

//Metodo para conseguir las respuestas
const conseguirAnswers = () => {
    fetch("https://server-relyer.herokuapp.com/api/answers/", {
    }).then(response => response.json())
        .then(data => {
            /* Se le da el valor a la variable answers el resultado de la peticion y se llama a la funcion "escribir" con los 
            parametros de questions y answers (arrays que contienen los resultados de las peticiones)*/
            answers = data.answers
            escribir(questions, answers);
        }).catch(message_error => console.log('F ' + message_error))
}

// Metodo para enviar los resultados, recibe como parametro la variable userData
const enviarResultados = (data) => {
    fetch("https://server-relyer.herokuapp.com/api/results/", {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        if (response.ok) {
            return response.text()
        } else {
            throw new Error("Error");
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

// Se llama al metodo conseguirQuestions para listar las preguntas
conseguirQuestions();

//Funcion para escribir sobre el html las preguntas y respuestas
function escribir(questions2, answers2) {

    // Variable "result" que servira para almacenar una busqueda, las variables "contador" y "m" que funcionan como contadores y la variable "comilla" para el uso de la comilla simple
    let result;
    let contador = 0;
    let m = 0;
    let comilla = "'"

    // Foreach que recorre el array de questions, se le nombra questions2
    questions2.forEach(element => {

        // Se usa la variable result para filtrar el array de answers2(answers), se busca que el "questionId" de la respuesta coincida con el id de la pregunta
        result = answers2.filter(valor2 => valor2.questionId === element.uid)
        // Condicionales de acuerdo al tipo de la pregunta, para escribir sobre el html de forma diferente
        /*
        tipo 0: Unica eleccion
        tipo 1: Seleccion multiple sin opcion de "otros"
        tipo 2: Seleccion multiple con opcion de "otros"
        */
        if (element.type == 0) {
            contenedor.innerHTML += '<div class="card">' +
                '<h2 class="preguntas">' + element.question + '</h2>' +
                '<div class="opciones" id="card' + contador + '"></div></div>'
                // Se crea forEach recorriendo la variable result, seguidamente se usa la variable "contenedorOpciones" junto con el contador "m"
            result.forEach(valor => {
                // Si la respuesta tiene como valor "otros" entonces se añade un input de tipo texto para escribir, de lo contrario no se crea este input
                if (valor.answer == "Otros (Especifique)") {
                    contenedorOpciones[m].innerHTML += '<input type="radio" onchange="Checked(' + contador + ')" class="radio" id="' + valor.uid + '" name="card' + contador + '" value="' + valor.answer + '">' +
                        '<label for="' + valor.uid + '" class="respuestas2">' + valor.answer + '</label><br>' +
                        '<input type="text" id="' + valor.uid + '" disabled class="text" id="text' + contador + '" name="card' + contador + '">'
                } else {
                    contenedorOpciones[m].innerHTML += '<input type="radio" class="radio" id="' + valor.uid + '" name="card' + contador + '" value="' + valor.answer + '">' +
                        '<label for="' + valor.uid + '" class="respuestas2">' + valor.answer + '</label><br>';
                }
            });
            // Se aumenta "m"
            m++;
        } else if (element.type == 1) {
            contenedor.innerHTML += '<div class="card">' +
                '<h2 class="preguntas">' + element.question + '</h2>' +
                '<div class="opciones" id="card' + contador + '"></div></div>'
                // Se crea forEach recorriendo la variable result, seguidamente se usa la variable "contenedorOpciones" junto con el contador "m"
            result.forEach(valor => {
                // Si la respuesta tiene como valor "Ninguno" o algo similar se le agrega al input un llamado a la funcion "Checked2" que recibe como valores el contador y el id de la respuesta que se recorre, de lo contrario no se agrega
                if (valor.answer == 'Ninguno' || valor.answer == "No" || valor.answer == "Ninguna") {
                    contenedorOpciones[m].innerHTML += '<input type="checkbox" onchange="Checked2(' + contador + ',' + comilla + valor.uid + comilla + ')" class="checkbox" id="' + valor.uid + '" name="card' + contador + '" value="' + valor.answer + '">' +
                        '<label for="' + valor.uid + '" class="respuestas2">' + valor.answer + '</label><br>';
                } else {
                    contenedorOpciones[m].innerHTML += '<input type="checkbox" class="checkbox" id="' + valor.uid + '" name="card' + contador + '" value="' + valor.answer + '">' +
                        '<label for="' + valor.uid + '" class="respuestas2">' + valor.answer + '</label><br>';
                }
            });
            // Se aumenta "m"
            m++;

        } else if (element.type == 2) {
            contenedor.innerHTML += '<div class="card">' +
                '<h2 class="preguntas">' + element.question + '</h2>' +
                '<div class="opciones" id="card' + contador + '"></div>'
            '</div>';
            // Se crea la variable contador "i" con inicio desde 1
            let i = 1;
            // Se crea forEach recorriendo la variable result, seguidamente se usa la variable "contenedorOpciones" junto con el contador "m"
            result.forEach(valor => {
                // Condicional que revisa si se esta en la ultima posicion del array de result, de ser asi añado input de texto para el apartado de "otros", ademas, se le añade a su input el llamado a Checked que recibe como parametro el contador
                if (i == result.length) {
                    contenedorOpciones[m].innerHTML += '<input type="checkbox" onchange="Checked(' + contador + ')" class="checkbox otro" id="' + valor.uid + '" name="card' + contador + '" value="' + valor.answer + '">' +
                        '<label for="' + valor.uid + '" class="respuestas2">' + valor.answer + '</label><br>' +
                        '<input type="text" id="' + valor.uid + '" disabled class="text" id="text' + contador + '" name="card' + contador + '">'
                } else if (valor.answer == 'Ninguno' || valor.answer == "No" || valor.answer == "Ninguna") {
                    contenedorOpciones[m].innerHTML += '<input type="checkbox" onchange="Checked2(' + contador + ',' + comilla + valor.uid + comilla + ')" class="checkbox" id="' + valor.uid + '" name="card' + contador + '" value="' + valor.answer + '">' +
                        '<label for="' + valor.uid + '" class="respuestas2">' + valor.answer + '</label><br>';
                } else {
                    contenedorOpciones[m].innerHTML += '<input type="checkbox" class="checkbox" id="' + valor.uid + '" name="card' + contador + '" value="' + valor.answer + '">' +
                        '<label for="' + valor.uid + '" class="respuestas2">' + valor.answer + '</label><br>';
                }
                i++;
            });
            m++;
        }
        contador++;
    });
}

// Funcion que recibe como parametro el contador y se encarga de habilitar el campo de "otros"
function Checked(contador) {
    // Se busca los inputs que contengan el name de card+contador y variable para buscar la ultima posicion
    let inputs = document.getElementsByName('card' + contador);
    let position = inputs.length;
    // Condicional para revisar si el penultimo input ha sido marcado, de ser asi se habilita el input text y se desmarcan los demas inputs marcados
    if (inputs[position - 2].checked) {
        inputs.forEach(value => {
            value.checked = false;
        });
        inputs[position - 2].checked = true;
        inputs[position - 1].disabled = false;
        console.log('Checked');
    }
    else {
        inputs[position - 1].disabled = true;
    }
    // Ciclo for que se repite hasta el penultimo input, ademas de condicional que revisa si se marca otro input entonces el input text se deshabilite y se desmarque "otros"
    for (let i = 0; i < position - 2; i++) {
        inputs[i].addEventListener('change', function () {
            if (this.checked) {
                inputs[position - 2].checked = false;
                inputs[position - 1].disabled = true;
            }
        });
    }
}

/* 
Funcion que valida al momento de marcar la casilla "Ninguno" o algo similar, al marcar la casilla se
desmarcan las demas, mientras que, si esta marcada la casilla "Ninguno" o similar y se marca otra casilla entonces la casilla "Ninguno se desmarca"
*/
function Checked2(contador, id2) {
    // Variables para buscar todos los inputs el cual tengan el name de card+contador, siendo contador un numero utilizado para diferenciarlos, tempInputs como array temporal y el id buscando elementos que tengan el id recibido
    let inputs = document.getElementsByName('card' + contador);
    let tempInputs = [];
    let id = document.getElementById(id2);
    // For que se recorre la cantidad de veces de el valor de inputs
    for (let j = 0; j < inputs.length; j++) {
        // condicional que toma la variable id (que contiene el input con el valor de "ninguno") y si es diferente al input que se recorre entonces se añade al array temporal, esto para crear un array sin el input de "Ninguno"
        if (id != inputs[j]) {
            tempInputs.push(inputs[j]);
        }
    }
    // Si el campo de "ninguno" ha sido check entonces todos los demas inputs son deseleccionados
    if (id.checked) {
        inputs.forEach(element => {
            element.checked = false;
        });
        id.checked = true;
    }
    // Array que recorre el array temporal y si alguno de estos es marcados entonces el input de "Ninguno se deselecciona"
    tempInputs.forEach(element => {
        element.addEventListener('change', function () {
            if (this.checked) {
                id.checked = false;
            }
        })
    });
}

// Variables que almacenan los array y variables que se envian en userData
let questions5 = [];
let answers5 = [];
let scoreFinal = '';
let usuarioId = "5";

// Objeto que se enviara mediante la peticion para almacenar los resultados
let userData = {
    questionsId: questions5,
    answers: answers5,
    score: score,
    usuarioId: usuarioId
};


// Al momento de presionar el boton de enviar
button.addEventListener('click', async (e) => {
    let options = document.getElementsByClassName('opciones');

    // Validacion campos vacios
    for (let element of options) {
        let validacion = document.getElementsByName(element.id);
        let boolean = new Boolean(false);
        validacion.forEach(valor => {
            if (valor.checked) {
                console.log('Uno check');
                boolean = true;
                console.log(valor);
            }
        });
        if (boolean == false) {
            alert('Aún hay preguntas sin responder');
            return false;
        }
    }
    // Fin Validacion

    // variable "cont" como contador y "pregunta" tomando todos los elementos h2
    let cont = 0;
    let pregunta = document.querySelectorAll('h2')
    // For que se recorre el array options
    for (let element of options) {
        // Se define arrayTemp para almacenar las respuestas
        let arrayTemp = [];
        let validacion = document.getElementsByName(element.id);

        let guardar = new Boolean(false);
        validacion.forEach(valor => {
            if (valor.type == 'checkbox' && valor.checked && valor.value != "Otros") {
                arrayTemp.push(valor.value);
                score.push(valor.id);
                guardar = true;
            } else if (valor.type == 'radio' && valor.checked && valor.value != "Otros (Especifique)") {
                arrayTemp.push(valor.value);
                score.push(valor.id);
                guardar = true;
            } else if (valor.type == 'text' && !valor.disabled && valor.value) {
                arrayTemp.push(valor.value);
                score.push(valor.id);
                guardar = true;
            }
        });
        // Si el booleano guardar es true entonces se almacena el arrayTemporal y la respectiva pregunta al array answers5 y questions5
        if (guardar && guardar != '0') {
            answers5.push(arrayTemp.toString());
            arrayTemp = []
            questions5.push(pregunta[cont].innerHTML);
        }
        cont++;
    }
    // Se envian los resultados y redirecciona hacia la pagina de los resultados
    enviarResultados(userData);
    window.location.href = "./results.html"
});

