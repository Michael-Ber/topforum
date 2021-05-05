window.addEventListener("DOMContentLoaded", () => {
    const customerSwiper = new Swiper('.customer__frame', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.customer__arrow-right',
          prevEl: '.customer__arrow-left',
        },
        spaceBetween: 50,
        speed: 600,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2
            }
        }
    });
    const clientsSwiper = new Swiper('.clients__carousel-frame', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.clients__arrow-right',
          prevEl: '.clients__arrow-left',
        },
        spaceBetween: 13,
        speed: 600,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            410: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            576: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            768: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
            992: {
                slidesPerView: 6,
                slidesPerGroup: 6
            }
        }
    });

});