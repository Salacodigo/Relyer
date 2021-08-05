//Constants  inspirational
const photoInspirational1 = document.getElementById('photo-one');
const photoInspirational2 = document.getElementById('photo-two');
const photoInspirational3 = document.getElementById('photo-three');
const photoInspirational4 = document.getElementById('photo-four');

const btnInspirational1 = document.getElementById('name-one');
const btnInspirational2 = document.getElementById('name-two');
const btnInspirational3 = document.getElementById('name-three');
const btnInspirational4 = document.getElementById('name-four');

const descInspirational1 = document.getElementById('description-one');
const descInspirational2 = document.getElementById('description-two');
const descInspirational3 = document.getElementById('description-three');
const descInspirational4 = document.getElementById('description-four');


//Load Event listeners
inspirationalEventListeners();

function inspirationalEventListeners() {
   btnInspirational1.addEventListener('click', showInspirational1);
   btnInspirational2.addEventListener('click', showInspirational2);
   btnInspirational3.addEventListener('click', showInspirational3);
   btnInspirational4.addEventListener('click', showInspirational4);
}

function hideAllInspirational() {
   let photos = [
      photoInspirational1,
      photoInspirational2,
      photoInspirational3,
      photoInspirational4
   ]
   let descriptions = [
      descInspirational1,
      descInspirational2,
      descInspirational3,
      descInspirational4
   ]

   photos.forEach(photo => {
      photo.style.display = "none";
   })
   descriptions.forEach(desc => {
      desc.style.display = "none";
   })
}

function showInspirational1() {
   hideAllInspirational();
   photoInspirational1.style.display = "flex";
   descInspirational1.style.display = "flex";
}
function showInspirational2() {
   hideAllInspirational();
   photoInspirational2.style.display = "flex";
   descInspirational2.style.display = "flex";
}
function showInspirational3() {
   hideAllInspirational();
   photoInspirational3.style.display = "flex";
   descInspirational3.style.display = "flex";
}
function showInspirational4() {
   hideAllInspirational();
   photoInspirational4.style.display = "flex";
   descInspirational4.style.display = "flex";
}


console.log("Corre inspirational"); 