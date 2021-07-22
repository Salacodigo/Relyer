const english = document.getElementsByClassName('en')[0]
const spanish = document.getElementsByClassName('es')[0]
const language = document.getElementsByClassName('language')[0]
const langtitle = document.getElementsByClassName('langtitle')[0]
const langflag = document.getElementsByClassName('language-flag')[0]


const homeContent = {

    spanish: [
        'Inicio', 'Servicios', 'Expertos', 'Test diagnóstico', 'Aprende', 'Sobre nosotros', 'Conócenos', 'Contacto', 'Inicia sesión', 'Inicio', 'Expertos', 'Test diagnóstico', 'Aprende', 'Sobre nosotros', 'Contacto', 'Relyer', 'Somos la conexión entre pequeños <br> empresarios y soluciones tecnológicas,<br> organizacionales y culturales', 'Conoce tu <span class="techlevelspan"> nivel tecnológico </span> ', 'Nuestras soluciones', 'La tecnología y la innovación son nuestras principales cartas', 'Expertos', 'Tecnología', 'Recursos', '¿Cómo <span>funciona?</span>', 'Identifica', 'Puedes encontrar posibles <br> falencias por tu cuenta <br> o usar nuestro diagnóstico  ', 'Aprende', 'Descubre como las herramientas <br> tecnológicas y diferentes metologías <br> pueden llevarte al siguiente nivel <br> de la mano de expertos', 'Aplica', 'Usa los conceptos <br> aprendidos para expandir <br> tu empresa/negocio', 'No importa si se te dificultan <br> las nuevas tecnologías o el ambiente digital o si tienes previa <br> experiencia', 'Te ayudamos a dar tu <span class="first">Primer paso</span>', 'Empresas que confían en nosotros', '<span class="statistics-numbers ">+100</span> <br>Empresas', '<span class="statistics-numbers ">+4.5</span> <br>Puntaje', '<span class="statistics-numbers ">2</span> <br>idiomas', 'COMIENZA AHORA', 'Conoce el <span>nivel tecnológico </span> de tu empresa'
    ]
    ,
    english: [
        'Home', 'Services', 'Experts & Tools', 'Diagnosis Test', 'Learn more', 'About us', 'know us', 'Contact', 'Login/Register', 'Home', 'Experts & Tools', 'Diagnosis Test', 'Learn more', 'About us', 'know us', 'Relyer', 'We are the connection between <br> the micro-entrepreneurs and <br> technological, organizational & <br> cultural solutions and methods', 'Know the <span class="techlevelspan"> tech level</span> <br> of your company', 'Our solutions', 'Tech and innovation are our right hand', 'Experts', 'Tech', 'Resources', 'How does it <span>work?</span>', 'Identify', 'You can either find possible <br> issues by yourself or with our <br> diagnosis', 'Learn', 'Discover how tech tools and <br> methodologies can take you <br> the next level with experts <br> guide', 'Apply', ' Use the concepts learnt and <br> see the expansion of your <br> company/ business', 'It doesn’t matter whether you’re struggling with managing devices and tech, or if you already have more experience', 'We’ll help you make your <span class="first">First step</span>'
        , 'Enterprises that support us', ' <span class="statistics-numbers ">+100</span> <br> Companies', ' <span class="statistics-numbers ">+4.5</span> <br> Rating', '<span class="statistics-numbers ">3</span> <br>Language', 'START NOW', 'Know the <span>tech level</span> of your company'
    ]

}

english.addEventListener('click', () => {
    langflag.src = "../Assets/en-flag.svg"
    langflag.alt = "English Flag"
    langtitle.innerHTML = "English"
    english.classList.add('selected')
    spanish.classList.remove('selected')
    english.innerHTML = "English"
    spanish.innerHTML = "Spanish"
    localStorage.setItem('language', 'en')
    toEnglish(homeContent)
})


spanish.addEventListener('click', () => {

    langflag.src = "../Assets/es-flag.svg"
    langflag.alt = "Bandera española"
    langtitle.innerHTML = "Español"
    spanish.classList.add('selected')
    english.classList.remove('selected')
    english.innerHTML = "Inglés"
    spanish.innerHTML = "Español"
    localStorage.setItem('language', 'es')
    toSpanish(homeContent)
})


if (localStorage.getItem('language')) {
    const currentLanguage = localStorage.getItem('language')
}




const translate = document.querySelectorAll('.translate')


function toSpanish(content) {

    for (let i = 0; i < translate.length; i++) {
        translate[i].innerHTML = content.spanish[i]
    }

}

function toEnglish(content) {

    for (let i = 0; i < translate.length; i++) {
        translate[i].innerHTML = content.english[i]
    }

}