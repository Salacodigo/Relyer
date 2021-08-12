const loginButton = document.getElementsByClassName("login--desktop")[0];
const loginButton2 = document.getElementsByClassName("login--mobile")[0];
const loginIcon = document.getElementsByClassName("loginicon")[0];

let logged = false;

if (localStorage.getItem("token")) {
	loginButton.innerHTML = "Logout";
	loginButton2.innerHTML = "Logout";
	logged = true;
	loginIcon.setAttribute("style", "transform: rotate(180deg);");
}

loginButton.addEventListener("click", logOut);
loginButton2.addEventListener("click", logOut);
loginIcon.addEventListener("click", logOut);

function logOut() {
	if (logged === true) {
		event.preventDefault();
		localStorage.setItem("token", "");
		loginButton.innerText = "Login/Register";
		loginButton2.innerText = "Login/Register";
		printMessage("#C5F3D7", "#20AB5A", "Successful logout", "successMessage");
		loginIcon.setAttribute("style", "transform: rotate(0deg);");
		logged = false;
	}
}
