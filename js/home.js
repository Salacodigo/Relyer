// HOME VIDEO
let playButtonResponsive = document.getElementsByClassName("play-button-video--responsive")[0];
playButtonResponsive.addEventListener("click", playVideo);

function playVideo() {
	let bg = document.createElement("div");
	bg.setAttribute(
		"style",
		`position:fixed;
        inset: 0;
        z-index:1000;
        background-color: rgba(0, 0, 0, 0.678);
    `
	);

	document.documentElement.setAttribute("style", "overflow-y:hidden;");

	let returnMaxButton = document.createElement("img");
	returnMaxButton.className = "returnButton";
	returnMaxButton.src = "./assets/home/closewhite.svg";
	returnMaxButton.alt = "Return Button";
	returnMaxButton.setAttribute("style", "position:fixed; right:20px; top:20px; height:20px; width:20px; z-index:99999;cursor:pointer;");

	let video = document.createElement("video");
	video.src = "./assets/home/relyer.mp4";
	video.setAttribute(
		"style",
		`
			position:fixed;  top: 50%; left: 50%; height:415px; width:800px; display:block; transform: translate(-50%, -50%); z-index:99999; max-width:100vw;`
	);
	video.controls = true;
	document.body.append(bg, returnMaxButton, video);

	// RETURN ON X CLICK
	const closeMax = () => {
		for (let i = 0; i < 3; i++) {
			document.body.removeChild(document.body.lastElementChild);
		}
		document.documentElement.setAttribute("style", "overflow-y:unset;");
	};
	returnMaxButton.addEventListener("click", closeMax);
}
