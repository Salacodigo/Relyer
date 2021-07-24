
const expertsContainer = document.getElementsByClassName('swiper-wrapper')[0]

!async function fetchExpert() {

    let request = await fetch('https://server-relyer.herokuapp.com/api/expertos')
    let response = await request.json()
    let experts = response.usuarios

    console.log('%c Experts', 'color:blue;')
    console.log(experts)

    experts.forEach(expert => {

        let swiperSlide = document.createElement('div')
        swiperSlide.className = "swiper-slide"

        swiperSlide.innerHTML = `
        <div class="expert-card">
            <img src="https://source.unsplash.com/140x140/?girl" alt="girl">
            <h2>${expert.nombre}</h2>
            <p>${expert.experience}</p>
            <div class="category">
                <h2>${expert.category}</h2>
            </div>
            <button>Contact Me</button>
        </div>`

        expertsContainer.appendChild(swiperSlide)
    });


}()


!async function fetchTool() {

    let request = await fetch('https://server-relyer.herokuapp.com/api/tools')
    let response = await request.json()
    let tools = response.tools

    console.log('%c tools', 'color:blue;')
    console.log(tools)

    tools.forEach(tool => {
    });


}()
