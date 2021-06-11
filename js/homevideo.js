
let playbutton = document.getElementsByClassName('fa-play-circle')[0]

playbutton.addEventListener('click',()=>{

    let bg = document.createElement('div')
    bg.setAttribute('style',`
        position:absolute;
        inset: 0;
        z-index:1000;
        background-color: rgba(0, 0, 0, 0.678);
    `)

    document.documentElement.setAttribute('style', 'overflow-y:hidden;')
    
    let returnMaxButton = document.createElement('img')
    returnMaxButton.className = "returnButton"
    returnMaxButton.src = "../Assets/closewhite.svg"
    returnMaxButton.alt = "Return Button"
    returnMaxButton.setAttribute('style','position:fixed; right:20px; top:20px; height:20px; width:20px; z-index:99999;cursor:pointer;')
    
    let youtubeIframe = document.createElement('iframe')
    youtubeIframe.style = `position:fixed;   top: 50%; left: 50%; 
    transform: translate(-50%, -50%); z-index:99999; max-width:100vw; `
    youtubeIframe.setAttribute("name", "Youtube video player");
    youtubeIframe.frameBorder = 0;
    youtubeIframe.allow = "accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture; fullscreen;"
    youtubeIframe.style.height = 415 + "px";
    youtubeIframe.style.width = 800 + "px";
    youtubeIframe.src= "https://www.youtube.com/embed/K4DyBUG242c"
    
    document.body.append(bg,returnMaxButton,youtubeIframe)


    // RETURN ON X CLICK

    const closeMax = () => {
    
        for (let i= 0; i < 3; i++) {
            document.body.removeChild(document.body.lastElementChild)            
        }
        document.documentElement.setAttribute('style', 'overflow-y:unset;')
    }
    returnMaxButton.addEventListener('click', closeMax)
})


    // ADITTIONAL LINKS
    let rightTestArrow = document.getElementsByClassName('fa-arrow-circle-right')[0]
    let startNow = document.getElementsByClassName('fa-arrow-right')[0]
    let testArrow= document.getElementsByClassName('buttonright')[0]

    rightTestArrow.addEventListener('click',()=> document.location.href= "../html/testInformative.html")
    testArrow.addEventListener('click',()=> document.location.href= "../html/testInformative.html")
    startNow.addEventListener('click',()=> document.location.href= "#")