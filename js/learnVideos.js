//Constant
const nameVideo1 = document.getElementById('name1');
const nameVideo2 = document.getElementById('name2');
const nameVideo3 = document.getElementById('name3');
const nameVideo4 = document.getElementById('name4');

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');

const descVideo1 = document.getElementById('desc1');
const descVideo2 = document.getElementById('desc2');
const descVideo3 = document.getElementById('desc3');
const descVideo4 = document.getElementById('desc4');

videosEventListeners();

function videosEventListeners(){
   nameVideo1.addEventListener('click', show1);
   nameVideo2.addEventListener('click', show2);
   nameVideo3.addEventListener('click', show3);
   nameVideo4.addEventListener('click', show4);
}

function hideAllVideos(){
   let videos = [video1, video2, video3, video4];
   let descriptions = [descVideo1, descVideo2, descVideo3, descVideo4];

   videos.forEach( video => {
      video.style.display = "none";
   });

   descriptions.forEach( desc => {
      desc.style.display = "none";
   })
}

function show1(){
   hideAllVideos();
   video1.style.display = "flex";
   descVideo1.style.display = "flex";
}

function show2(){
   hideAllVideos();
   video2.style.display = "flex";
   descVideo2.style.display = "flex";
}

function show3(){
   hideAllVideos();
   video3.style.display = "flex";
   descVideo3.style.display = "flex";
}

function show4(){
   hideAllVideos();
   video4.style.display = "flex";
   descVideo4.style.display = "flex";
}


