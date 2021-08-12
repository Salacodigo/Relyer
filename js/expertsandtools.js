const expertsContainer = document.getElementsByClassName("swiper-wrapper")[0];
const toolsContainer = document.getElementsByClassName("swiper-wrapper")[1];

!(async function fetchExpert() {
	let request = await fetch("https://server-relyer.herokuapp.com/api/expertos?limite=10");
	let response = await request.json();
	let experts = response.usuarios;

	let counter = 1;
	let imgAlt;

	console.log(experts);

	experts.forEach(expert => {
		if (counter % 2 === 0) {
			imgAlt = "man";
		} else {
			imgAlt = "Girl";
		}

		let expertSlide = document.createElement("div");
		expertSlide.className = "swiper-slide";

		expertSlide.innerHTML = `
        <div class="expert-card">
            <img src="../assets/experts/experts/ex${counter}.jpeg" alt="${imgAlt}">
            <h2>${expert.nombre}</h2>
            <p>${expert.experience}</p>
            <div class="category">
                <h2>${expert.category}</h2>
            </div>
            <button class="expert expert${counter}">Contact Me</button>
            <div style="display:none;" value="${expert.uid}"></div>
                    </div>`;

		expertsContainer.appendChild(expertSlide);

		counter++;
	});

	// SLIDER IS APPEND WHEN INFO IS RETURNED

	const swiper = new Swiper(".swp1", {
		// Optional parameters
		direction: "horizontal",
		loop: true,
		Observer: true,
		observeParents: true,

		//Responsive breakpoints
		breakpoints: {
			200: {
				slidesPerView: 1,
			},
			800: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},

		// Pagination
		pagination: {
			el: ".s1p",
			dynamicBullets: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// CONTACT EACH EXPERT CLICKING IT
	const expertContact = document.querySelectorAll(".expert");

	expertContact.forEach(expert => {
		expert.addEventListener("click", () => {
			let expertName = expert.previousElementSibling.previousElementSibling.previousElementSibling.innerText;

			if (logged === false) {
				printMessage("#FFE1DE", "#F47174", `Login to contact experts`, "error");
			} else {
				printMessage("#C5F3D7", "black", `${expertName} will contact you soon ..`, "success");
				console.log(expertName);
			}
		});
	});
})();

!(async function fetchTool() {
	let request = await fetch("https://server-relyer.herokuapp.com/api/tools");
	let response = await request.json();
	let tools = response.tools;

	console.log(tools);

	let counter = 1;

	tools.forEach(tool => {
		let toolSlide = document.createElement("div");
		toolSlide.className = "swiper-slide";

		toolSlide.innerHTML = `
            <div class="imgwrap">
                <img src="../assets/experts/tools/tool${counter}.png" alt="tool">
            </div>

            <div class="info">
                <h2>${tool.nombre}</h2>
                <p>${tool.description}</p>
                <button class= "tool${counter}">Know More</button>
            </div>`;

		toolsContainer.appendChild(toolSlide);
		counter++;
	});

	const swiper2 = new Swiper(".swp2", {
		direction: "horizontal",
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
})();
