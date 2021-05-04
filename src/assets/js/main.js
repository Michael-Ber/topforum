window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.customer__frame', {
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
});