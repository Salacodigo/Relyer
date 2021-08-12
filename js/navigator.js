/*-------- APPEND NAVIGATOR, RESPONSIVE, NAV BUTTONS--------- */

/*TEMPLATE FOR THE NAVIGATOR */
let navTemplate = document.createElement("template");
navTemplate.innerHTML = `
    <script src="https://kit.fontawesome.com/21ea2d94c2.js" crossorigin="anonymous"></script>
    <ul>
    <img class="relyer-logo" src="../Assets/relyer-logo.svg" alt="Relyer Logo">

    <li class="nav-list2">
        <a href="../index.html" class="main-sections">
            <h3 class="translate ">Home</h3>
        </a>
        <div class="main-sections services">
            <h3 class="translate ">Services</h3>
            <i class="fas fa-angle-double-down"></i>

            <div class="subsection">
            <a class="paragraph first-paragraph experts translate" href="../html/expertstools.html">Experts &
                            Tools</a>
                        <a href="../html/testInformative.html"
                            class="paragraph second-paragraph test translate">Diagnosis Test</a>
                    </div>

        </div>
        <a href="../html/learn.html" class="main-sections learnmore">
            <h3 class="translate "> Learn more</h3>
        </a>
        <div class="main-sections aboutus">
            <h3 class="translate ">About us </h3>
            <i class="fas fa-angle-double-down"></i>
            <div class="subsection">
                <a class="paragraph first-paragraph knowus translate">Know us</a>
                <a class="paragraph second-paragraph contact translate">Contact</a>
            </div>

        </div>
    </li>

    <li class="nav-list3">
    <a href="../html/login.html" class="login translate">Login/Register</a>
    <div class="language">
        <img class="language-flag" src="../Assets/en-flag.svg" alt="United States flag">
        <h2 class="langtitle">English</h2>

        <div class="optionlanguage">
            <p class="languageoptions en selected">English</p>
            <p class="languageoptions es">Spanish</p>
        </div>

    </div>
</li>
    </ul>
    <div class="hamburguer"><span></span><span></span><span></span></div>

    <div class="responsive-nav">
    <ul>
        <a class="responsive1 translate">Home</a>
        <a class="responsive2 translate">Experts & Tools </a>
        <a class="responsive3 translate"> Diagnosis Test</a>
        <a class="responsive4 translate">Learn more</a>
        <a class="responsive5 translate">Know us </a>
        <a class="responsive6 translate">Contact </a>


    </ul>
    </div>
    `;
/*  NAV CONTAINER */
let navContainer = document.getElementsByClassName("nav-container")[0];

if (document.body.id !== "home") navContainer.appendChild(navTemplate.content);

/*HAMBURGUER RESPONSIVE*/

let hamburguer = document.getElementsByClassName("hamburguer")[0];
let firstspan = hamburguer.firstElementChild;
let secondspan = hamburguer.firstElementChild.nextElementSibling;
let thirdspan = hamburguer.lastElementChild;
let responsivenav = document.getElementsByClassName("responsive-nav")[0];

let contadornav = 0;

window.addEventListener("scroll", () => {
	containeranimation(true);
});
hamburguer.addEventListener("click", () => {
	containeranimation(false);
});

function containeranimation(quit) {
	if (contadornav == 0 && quit === false) {
		firstspan.setAttribute(
			"style",
			" transition:1s;transform: rotate(44deg) translateY(10.5px) translateX(9px); background-color: white;"
		);
		secondspan.setAttribute(
			"style",
			"transition:1s; transform: rotate(-45deg) ; transform: translate-y(10px) ;background-color: white;"
		);
		thirdspan.setAttribute("style", "display:none;");
		responsivenav.setAttribute("style", "transition:1s; transform: none;");
		contadornav = 1;
	} else {
		firstspan.setAttribute("style", " transition:1s;transform: none;");
		secondspan.setAttribute("style", "transition:1s; transform: none;");
		thirdspan.setAttribute("style", "transition:2s; display:block;");
		responsivenav.setAttribute(
			"style",
			"transition:1s; transform: translateX(-100%);"
		);
		contadornav = 0;
	}
}

let digitaltText = document.getElementsByClassName("digitalt")[0];
/* STICKY NAV */

window.addEventListener("scroll", () => {
	navContainer.classList.toggle("sticky", window.scrollY > 0);
});

/*  GO TO HOME ON LOGO */

let relyerlogo = document.getElementsByClassName("relyer-logo")[0];

relyerlogo.addEventListener("click", () => {
	if (document.body.id !== "home") location.href = "../index.html";
});
