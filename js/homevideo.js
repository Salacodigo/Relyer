

const videointro=document.getElementsByClassName('video-intro')[0];
const navcontainer=document.getElementsByClassName('nav-container')[0];
const playbutton=document.getElementsByClassName('play-button')[0];
const home=document.getElementsByClassName('home')[0];

playbutton.addEventListener('click',()=>{

    videointro.setAttribute('style',
    `
    display:block;
    animation: 3s rollvideo ease-in-out forwards;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    z-index: 100;`);
    
    videointro.play()
    videointro.loop= true;
    
    navcontainer.setAttribute('style',`
    background-color:rgba(14, 2, 2, 0.096);
    `
    )


    home.setAttribute('style',`
    opacity:0;
    `)



})


