
    const swiper = new Swiper('.swpcont1', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 500,

        // If we need pagination
        pagination: {
            el: '.swp1',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    
    const swiper2 = new Swiper('.swpcont2', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 500,

        // AUTOPLAY
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swp2',
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });