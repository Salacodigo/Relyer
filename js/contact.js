let sendContact = document.getElementsByTagName("form")[0];

sendContact.addEventListener("submit", () => {
	printMessage("#C5F3D7", "#20AB5A", `Message sent`, "success");
});
