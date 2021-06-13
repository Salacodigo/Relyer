
    const swiper = new Swiper('.swiper-container', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 500,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    
    const swiper2 = new Swiper('.swiper-container2', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 500,

        // If we need pagination
        pagination: {
            el: '#pagination2',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#buttonnext2',
            prevEl: '#buttonprev2',
        },

    });