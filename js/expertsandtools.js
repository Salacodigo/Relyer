
const swiper2 = new Swiper(".swp2", {
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



const expertsContainer = document.getElementsByClassName('swiper-wrapper')[0]

!async function fetchExpert() {

    let request = await fetch('https://server-relyer.herokuapp.com/api/expertos')
    let response = await request.json()
    let experts = response.usuarios

    let counter = 1
    let imgAlt

    experts.forEach(expert => {

        if (counter % 2 === 0) {
            imgAlt = 'man'
        } else {
            imgAlt = 'Girl'
        }

        let swiperSlide = document.createElement('div')
        swiperSlide.className = "swiper-slide"

        swiperSlide.innerHTML = `
        <div class="expert-card">
            <img src="../Assets/experts/ex${counter}.jpg" alt="${imgAlt}">
            <h2>${expert.nombre}</h2>
            <p>${expert.experience}</p>
            <div class="category">
                <h2>${expert.category}</h2>
            </div>
            <button class="expert expert${counter}">Contact Me</button>
        </div>`

        expertsContainer.appendChild(swiperSlide)

        counter++
    });


    // SLIDERS

    const swiper = new Swiper('.swp1', {
        // Optional parameters
        direction: 'horizontal',
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
                slidesPerView: 3
            }
        },

        // Pagination
        pagination: {
            el: '.s1p',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {

            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

}()


!async function fetchTool() {

    let request = await fetch('https://server-relyer.herokuapp.com/api/tools')
    let response = await request.json()
    let tools = response.tools

    console.log('%c tools', 'color:blue;')
    console.log(tools)

    tools.forEach(tool => {
        console.log(tool)
    });


}()
