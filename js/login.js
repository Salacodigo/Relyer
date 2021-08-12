// GO TO HOME ON ARROW BACK
let arrowBack = document.getElementsByClassName("fa-arrow-circle-left")[0];
arrowBack.addEventListener("click", () => history.back());
const login = document.getElementsByClassName("loginForm")[0];

async function servidor() {
	let request = await fetch("https://server-relyer.herokuapp.com/api/auth/login");
	let response = request.json();
}

login.addEventListener("submit", async e => {
	let loginData = document.querySelectorAll(" input");
	let mail = loginData[0].value;
	let userPassword = loginData[1].value;

	e.preventDefault();

	let message = {
		correo: mail,
		password: userPassword,
	};

	console.log(JSON.stringify(message));

	let request = await fetch("https://server-relyer.herokuapp.com/api/auth/login", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(message),
	});

	let response = await request.json();
	console.log(response);

	if (response.usuario) {
		localStorage.setItem("token", response.token);
		localStorage.setItem("userId", response.usuario.uid);
		window.location.href = "../index.html";
	} else {
		printMessage("#FFE1DE", "#FE455B", "Password or email are incorrect", "error");
	}
});
