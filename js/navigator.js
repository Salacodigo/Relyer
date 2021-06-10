/*-------- APPEND NAVIGATOR, RESPONSIVE, NAV BUTTONS--------- */

/*TEMPLATE FOR THE NAVIGATOR */

let navTemplate = document.createElement('template')
navTemplate.innerHTML = `   
    <ul>
    <li class="nav-list1">
        <img class="relyer-logo" src="../Assets/relyer-logo.svg" alt="Relyer Logo">
    </li>

    <li class="nav-list2">
        <a href="../index.html" class="main-sections"><h3>Home</h3></a>
        <a href="#" class="main-sections"><h3>Services</h3></a>
        <a href="../html/learn.html" class="main-sections learnmore"><h3> Learn more</h3></a>
        <a href="#" class="main-sections aboutus"><h3>About us </h3></a>
    </li>

    <li class="nav-list3">
        <!-- <div class="login">Login</div> -->
        <!-- <div class="register">Register</div> -->
        <a href="../html/login.html" class="login">Login</a>
        <a href="../html/register.html" class="register">Register</a>
        <div class="language"> <img class="language-flag" src="../Assets/en-flag.svg" alt="United    States flag"><i class="fas fa-sort-down"></i></div>
    </li>
    </ul>
    <div class="hamburguer"><span></span><span></span><span></span></div>

    <div class="responsive-nav">
    <ul>
        <li class="responsive1">Home</li>
        <li class="responsive2">Services</li>
        <li class="responsive3">Learn more</li>
        <li class="responsive4"> About us</li>

    </ul>
    </div>
    `
/*  NAV CONTAINER */
let navContainer = document.getElementsByClassName('nav-container')[0]

if (document.body.id !== "home")
    navContainer.appendChild(navTemplate.content)


/*HAMBURGUER RESPONSIVE*/

let hamburguer = document.getElementsByClassName('hamburguer')[0]
let firstspan = hamburguer.firstElementChild
let secondspan = hamburguer.firstElementChild.nextElementSibling
let thirdspan = hamburguer.lastElementChild
let responsivenav = document.getElementsByClassName('responsive-nav')[0]

let contadornav = 0


window.addEventListener('scroll', () => {
    containeranimation(true)
})
hamburguer.addEventListener('click', () => {
    containeranimation(false)
})


function containeranimation(quit) {


    if (contadornav == 0 && quit === false) {

        firstspan.setAttribute('style', ' transition:1s;transform: rotate(45deg) translateY(10px) translateX(12px); background-color: white;')
        secondspan.setAttribute('style', 'transition:1s; transform: rotate(-45deg) ; background-color: white;')
        thirdspan.setAttribute('style', 'display:none;')
        responsivenav.setAttribute('style', 'transition:1s; transform: none;')
        contadornav = 1

    } else {
        firstspan.setAttribute('style', ' transition:1s;transform: none;')
        secondspan.setAttribute('style', 'transition:1s; transform: none;')
        thirdspan.setAttribute('style', 'transition:2s; display:block;')
        responsivenav.setAttribute('style', 'transition:1s; transform: translateX(-100%);')
        contadornav = 0

    }

}

let digitaltText = document.getElementsByClassName('digitalt')[0]
/* STICKY NAV */

window.addEventListener('scroll', () => {
    navContainer.classList.toggle('sticky', window.scrollY > 0)


})

/*  GO TO HOME ON LOGO */

let relyerlogo = document.getElementsByClassName('relyer-logo')[0];

console.log(relyerlogo)

relyerlogo.addEventListener('click', () => {
    if (document.body.id !== "home")
        location.href = "../index.html"
})



