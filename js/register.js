// GO TO HOME ON ARROW BACK
let arrowBack = document.getElementsByClassName("fa-arrow-circle-left")[0];
arrowBack.addEventListener("click", () => history.back());

const ctaButton = document.getElementsByClassName("register-form")[0];
let inputData = document.querySelectorAll("form input");
let ubication = document.getElementById("city");
let role = document.getElementById("entrp");

ctaButton.addEventListener("submit", async e => {
	e.preventDefault();

	// FORM DATA CREATION TO FETCH
	let name = inputData[0].value;
	let mail = inputData[1].value;
	let password = inputData[2].value;

	let userUbication = ubication.value;
	let userRole = role.value;

	let userData = {
		nombre: name,
		correo: mail,
		password,
		location: userUbication,
		position: userRole,
		rol: "USER_ROLE",
	};

	try {
		let request = await fetch("https://server-relyer.herokuapp.com/api/usuarios", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userData),
		});
		let response = await request.json();

		if (response.usuario) {
			printMessage("#C5F3D7", "#20AB5A", "User correctly created", "success");
			setTimeout(() => {
				window.location.href = "../html/login.html";
			}, 2500);
		} else {
			// printMessage("#FFE1DE", "#FE455B", response.errors[0].msg, "error");
			printMessage("#FFE1DE", "#FE455B", "Email already existed or invalid password length", "error");
		}
	} catch (err) {
		console.error(err);
	}
});
