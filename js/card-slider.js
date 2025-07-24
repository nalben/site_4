const swiper = new Swiper('.card-swcon', {
  slidesPerView: 1.3,
  loop: true,
  spaceBetween: 20,
  centeredSlides: false,
  grabCursor: true,
  observer: true,
  observeParents: true,

  breakpoints: {
    1610: {
      slidesPerView: 3,
    },
    898: {
      slidesPerView: 2,
    },
    601: {
      slidesPerView: 1.8,
    },
    0: {
      slidesPerView: 1.3, 
    }
  }
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.slider__arrow-right',
//     prevEl: '.slider__arrow-left',
//   },
//   pagination: {
//     el: '.slider__pug',
//     clickable: true,
//   },


});

// const swiper2 = new Swiper('.blog-swon', {
//   slidesPerView: 2,
//   loop: true,
//   spaceBetween: 20,
//   centeredSlides: false,
//   grabCursor: true,
//   observer: true,
//   observeParents: true,
// });


let swiper2 = null;
let swiper3 = null;

function initSwipers() {
  const screenWidth = window.innerWidth;

  // Инициализация swiper2
  if (screenWidth < 897 && !swiper2) {
    swiper2 = new Swiper('.blog-swcon', {
      slidesPerView: 1.3,
      loop: true,
      spaceBetween: 20,
      centeredSlides: false,
      grabCursor: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        700: {
          slidesPerView: 1.8,
        }
      }
    });
  }

  if (screenWidth >= 897 && swiper2) {
    swiper2.destroy(true, true);
    swiper2 = null;
  }

  // Инициализация swiper3
  if (screenWidth < 897 && !swiper3) {
    swiper3 = new Swiper('.grid-swcon', {
      slidesPerView: 1.3,
      loop: true,
      spaceBetween: 20,
      centeredSlides: false,
      grabCursor: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        700: {
          slidesPerView: 2.5,
        },
        500: {
          slidesPerView: 2,
        }
      }
    });
  }

  if (screenWidth >= 897 && swiper3) {
    swiper3.destroy(true, true);
    swiper3 = null;
  }
}

window.addEventListener('load', initSwipers);
window.addEventListener('resize', initSwipers);


//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.slider__arrow-right',
//     prevEl: '.slider__arrow-left',
//   },
//   pagination: {
//     el: '.slider__pug',
//     clickable: true,
//   },


