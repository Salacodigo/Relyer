/*-------- APPEND NAVIGATOR, RESPONSIVE, NAV BUTTONS--------- */

/*TEMPLATE FOR THE NAVIGATOR */

let navTemplate= document.createElement('template')
navTemplate.innerHTML= `   
    <ul>
        <li class="nav-list1">
            <img class="relyer-logo" src="../Assets/relyer-logo.svg" alt="Relyer Logo">
        </li>

        <li class="nav-list2">
            <a href="/index.html" class="main-sections"><h3>Home</h3></a>
            <a href="./html/aboutUs.html" class="main-sections"><h3>About us</h3></a>
            <a href="./html/learn.html" class="main-sections digitalt"><h3>Digital  <br> transformation</h3></a>
            <a href="./html/contact.html" class="main-sections"><h3>Contact</h3></a>
        </li>

        <li class="nav-list3">
            <div class="login">Login</div>
            <div class="register">Register</div>
            <div class="languagesticky"> <h3>En</h3> <img class="language-flag" src="../Assets/en-flag.svg" alt="United States flag"></div>
        </li>
    </ul>
    <div class="language"> <h3>En</h3> <img class="language-flag" src="../Assets/en-flag.svg" alt="United States flag"></div>
    <div class="hamburguer"><span></span><span></span><span></span></div>

    <div class="responsive-nav">
        <ul>
            <li class="responsive1">Home</li>
            <li class="responsive2">About us</li>
            <li class="responsive3">Digital transformation</li>
            <li class="responsive4"> Contact</li>
        
        </ul>
    </div>
    `
/* nav container */
let navContainer= document.getElementsByClassName('nav-container')[0]

if(document.body.id !== "home")
navContainer.appendChild(navTemplate.content)


/*HAMBURGUER RESPONSIVE*/

let hamburguer= document.getElementsByClassName('hamburguer')[0]
let firstspan= hamburguer.firstElementChild
let secondspan= hamburguer.firstElementChild.nextElementSibling
let thirdspan= hamburguer.lastElementChild
let responsivenav= document.getElementsByClassName('responsive-nav')[0]

let contadornav = 0 


window.addEventListener('scroll',()=>{
    containeranimation(true)
})
hamburguer.addEventListener('click',()=>{
    containeranimation(false)
})


function containeranimation(quit){


    if ( contadornav == 0 && quit === false){

        firstspan.setAttribute('style',' transition:1s;transform: rotate(45deg) translateY(10px) translateX(12px); background-color: white;')
        secondspan.setAttribute('style','transition:1s; transform: rotate(-45deg) ; background-color: white;')
        thirdspan.setAttribute('style','display:none;')
        responsivenav.setAttribute('style','transition:1s; transform: none;')
        contadornav=1

    } else {
        firstspan.setAttribute('style',' transition:1s;transform: none;')
        secondspan.setAttribute('style','transition:1s; transform: none;')
        thirdspan.setAttribute('style','transition:2s; display:block;')
        responsivenav.setAttribute('style','transition:1s; transform: translateX(-100%);')
        contadornav=0

    }

}

let digitaltText= document.getElementsByClassName('digitalt')[0]
/* STICKY NAV */

window.addEventListener('scroll',()=>{
    navContainer.classList.toggle('sticky',window.scrollY > 0)


})

/*  GO TO HOME ON LOGO */

let relyerlogo= document.getElementsByClassName('relyer-logo')[0];

console.log(relyerlogo)

relyerlogo.addEventListener('click',()=>{
    location.href = "../index.html"

})






/* let counters = document.querySelectorAll('.figure');
window.onload = contador(40);

function contador(speed) {
    counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
        } else {
        counter.innerText = target;}};
    updateCount();});}
 */