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

const knowUsContent = {
    spanish: [
        'DESCUBRE', 'RELYER', '¿Quiénes somos?', '<span class="info-we-give translate">Somos Relyer y a través de nuestra plataforma puedes acceder a recursos y formación de la mano de expertos que te permitirán facilitar y fortalecer el manejo del desarrollo de tu empresa </span><br><span class="info-we-give2">Nuestros pilares abordan todas las etapas del proceso de transformación </span><br> Haz crecer tu empresa, sus colaboradores y su futuro a través de la <span style="font-weight: bold;">transformación digital y cognitiva</span>', 'Profesionales', 'Sugerencias <br> tecnológicas', 'artículos', 'Descubre', 'Nuestro <span style="font-weight: bold;">ADN</span>', 'Porqué Relyer?', 'Valoramos a las personas como individuos y a la familia', 'Trabajamos en equipo con nuestros clientes de manera transparente', 'Somos generadores de ideas y soluciones', 'Equipo', 'Scrum Master', '´Diseñador UI/UX', 'Product Owner', 'Desarrollador backend', 'Desarrollador Frontend', 'Nuestras habilidades', 'Sostenibilidad', 'Adaptación', 'Crecimiento', 'Lo que dicen nuestros clientes ', 'Ustedes son increibles, no puedo creer todo el apoyo que he recibido y el crecimiento , gracias', ' Realmente estoy agradecido por el impacto tan positivo que han tenido en mi negocio y por la orientación que me han dado 10/10', 'Aumente mis ventas 3 veces en solo un par de meses, gracias Relyer', 'Solo 1 palabra, gracias', 'Muy buen servicio, recomendado'
    ],
    english: [
        'DISCOVER', 'RELYER', 'Who are we?', '<span class="info-we-give translate">We are Relyer and with our platform you can access to many resources, and grow your company always adviced by experts </span><br><span class="info-we-give2">   We are part of all the processes of the digital transformation  </span><br> Grow your company, and buld the future with the hand of the <span style="font-weight: bold;">digital transformation</span> ', 'Professionals', 'Tech suggestions', 'Articles', 'Why Relyer?', 'We appreciate people as human beings and family ', 'We work with our clients with open processes', 'We are generators of solutions and ideas', 'TEAM', 'Scrum Master', 'UI/UX designer', 'Product Owner', 'Backend developer'
        , 'Frontend developer ', 'OUR SKILLS', 'Sustainability', 'Adaptation', 'Growth', '"You guys are amazing, my company went somewhere I didnt believe possible with all the feedback and tools, thank you so much, worth every penny"', '"Im spechless for all the things I learnt and the way my entrepreneur ideas went high, thank you so much, relyer forever"', '" I sincerely can say that it was really great, you might think is just a common test, but is somethigng really brand new, and you have the best guidance in what you need"', '" I mean like just can say 2 words , thank you"', '" When you give your best and youre guided by the best success is a joke to you"'
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