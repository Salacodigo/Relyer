
let playbutton=document.getElementsByClassName('fa-play-circle')[0]

playbutton.addEventListener('click',()=>{

    console.log('clicked')
    let bg = document.createElement('div')
    bg.setAttribute('style',`
        position:absolute;
        inset: 0;
        z-index:1000;
        background-color: rgba(0, 0, 0, 0.678);
    `)

    document.body.appendChild(bg)
    // document.documentElement.setAttribute('style', 'overflow-y:hidden;')

    document.body.innerHTML+= `
    <img class="returnButton" src="../Assets/closewhite.svg" alt="Return button" style="position:fixed; right:20px; top:20px; height:20px; width:20px; z-index:99999;cursor:pointer;">

    <iframe style=" position:fixed; right:25%; top:20%; z-index:99999; max-width:100vw; "  width="800" height="415" src="https://www.youtube.com/embed/K4DyBUG242c"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `

    // RETURN ON X CLICK
    let returnMaxButton = document.getElementsByClassName('returnButton')[0]

    const closeMax = () => {

        for (let i= 0; i < 3; i++) {
            document.body.removeChild(document.body.lastElementChild)            
        }
        // document.documentElement.setAttribute('style', 'overflow-y:unset;')
    }

    returnMaxButton.addEventListener('click', closeMax)


    })

