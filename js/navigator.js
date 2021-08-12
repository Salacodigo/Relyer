/*-------- APPEND NAVIGATOR, RESPONSIVE, NAV BUTTONS, TRANSITIONS--------- */

/*TEMPLATE FOR THE NAVIGATOR */
let navTemplate = document.createElement("template");
navTemplate.innerHTML = `
<!-- LEFT SIDE LOGO NAV -->
<img class="navbar__img" src="../assets/home/relyer-logo.svg" alt="Relyer Logo">
<!-- CENTRAL LINKS NAVIGATOR -->
<div class="navbar__centralnav">
    <!-- HOME -->
    <a href="../index.html" class="centralnav__home">Home</a>
    <!-- SERVICES -->
    <div class="centralnav__services">
        <h3>Services
            <img class="simplearrow" src="../assets/home/normalarrow.svg" alt="arrowmobile">
            <img class="doublearrow" src="../assets/home/doublearrow.svg" alt="doublearrow">

        </h3>
        <div class="dropdownmenu">
            <a class=" services__experts" href="./experts.html">Experts &
                Tools</a>
            <a href="./test.html" class="services__test">Diagnosis
                Test</a>
        </div>
    </div>
    <!-- LEARN -->
    <a href="./learn.html">Learn</a>
    <!-- ABOUT US -->
    <div class="centralnav__aboutus">
        <h3>About us
            <img class="simplearrow" src="../assets/home/normalarrow.svg" alt="arrowmobile">
            <img class="doublearrow" src="../assets/home/doublearrow.svg" alt="doublearrow">
        </h3>
        <div class="dropdownmenu">
            <a href="./aboutus.html" class="aboutus__knowus">Know us</a>
            <a href="./contact.html" class="aboutus__contact">Contact</a>
        </div>
    </div>
    <!-- LOGIN REGISTER -->
    <a class="login--mobile" href="./login.html">Login/Register</a>

    <div class="centralnav__language--mobile">
        <img width="60" height="40" class="changelang__enflag changelang__lang selected"
            src="../assets/home/en-flag.svg" alt="United States flag">
        <img width="60" height="40" class="changelang__enflag changelang__lang" src="../assets/home/es-flag.svg"
            alt="Spanish Flag">
    </div>
</div>
<!-- RIGHT SIDE LINKS NAVIGATOR -->
<div class="navbar__rightnav">
    <!-- LOGIN -->
    <div class="rightnav__login button">
        <a class="login--desktop" href="./login.html">Login/Register</a>
        <a class="login--tablet" href="./login.html">
            <img class="loginicon" src="../assets/home/signin.svg" alt="Sign in">
        </a>

    </div>
    <!-- CHANGE LANGUAGE -->
    <div class="rightnav__changelang button">
        <img width="60" height="40" class="changelang__enflag" src="../assets/home/en-flag.svg"
            alt="United States flag">
        <h2 class="changelang__title">English</h2>
        <ul class="changelang__options">
            <li class="changelang__lang selected">English</li>
            <li class="changelang__lang">Spanish</li>
        </ul>
    </div>
</div>
<!-- HAMBURGUER MENU FOR MOBILE -->
<div class="hamburguer">
    <span></span><span></span><span></span>
</div>

    `;
/*  NAV CONTAINER */
const navContainer = document.getElementsByTagName("nav")[0];

if (document.body.id !== "home") navContainer.appendChild(navTemplate.content);

/* STICKY NAV */
window.addEventListener("scroll", () => {
	navContainer.classList.toggle("sticky", window.scrollY > 0);
});

/*  GO TO HOME ON LOGO */
let relyerlogo = document.getElementsByClassName("navbar__img")[0];

relyerlogo.addEventListener("click", () => {
	if (document.body.id !== "home") location.href = "../index.html";
});

// MOBILE

/*HAMBURGUER RESPONSIVE*/
const hamburguer = document.getElementsByClassName("hamburguer")[0];
const firstspan = hamburguer.firstElementChild;
const secondspan = hamburguer.firstElementChild.nextElementSibling;
const thirdspan = hamburguer.lastElementChild;
const responsivenav = document.getElementsByClassName("navbar__centralnav")[0];
let contadornav = 0;

window.addEventListener("scroll", () => {
	if (hamburguer) {
		containeranimation(true);
	}
});

hamburguer.addEventListener("click", () => {
	containeranimation(false);
});

function containeranimation(quit) {
	if (contadornav == 0 && quit === false) {
		firstspan.setAttribute("style", " transition:1s;transform: rotate(45deg) translateY(9px) translateX(9.4px); background-color: white;");
		secondspan.setAttribute("style", "transition:1s; transform: rotate(-45deg) ;background-color: white;");
		thirdspan.setAttribute("style", "display:none;");
		responsivenav.setAttribute("style", "transition:1s; transform: none;");
		contadornav = 1;
	} else {
		firstspan.setAttribute("style", " transition:1s;transform: none;");
		secondspan.setAttribute("style", "transition:1s; transform: none;");
		thirdspan.setAttribute("style", "transition:2s; display:block;");
		// IF YOU ARE IN MOBILE YOU SEE AN ANIMATION OTHERWISE YOU DONT
		if (window.innerWidth < 990) {
			responsivenav.setAttribute("style", "transition:1s; transform: translateX(-100%);");
		} else {
			responsivenav.setAttribute("style", "transition:0s; transform: translateX(-100%);");
		}

		contadornav = 0;
	}
}

// DROPDPWN MENU MOBILE

const servicesContainer = document.querySelector(".centralnav__services");
const aboutusContainer = document.querySelector(".centralnav__aboutus");

servicesContainer.addEventListener("click", activeClass);
aboutusContainer.addEventListener("click", activeClass);

function activeClass(e) {
	e.target.nextElementSibling.classList.toggle("active");
}
