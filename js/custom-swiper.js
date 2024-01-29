const partnersSwiper = new Swiper(".partners-swiper", {
  loop: true,
  slidesPerView: 4.19,
  spaceBetween: 24,
  initialSlide: 2,
  activeIndex: 2,
  grabCursor: true,
  speed: 800,

  // Navigation arrows
  navigation: {
    nextEl: ".partners-swiper-next",
    prevEl: ".partners-swiper-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      activeIndex: 0,
      initialSlide: 0,

      navigation: {
        nextEl: ".partners-swiper-next-mobile",
        prevEl: ".partners-swiper-prev-mobile",
      },
    },
    768: {
      slidesPerView: 4.19,
      spaceBetween: 24,
    },
  },
});

const newsSwiper = new Swiper(".swiper-news", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  speed: 800,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
