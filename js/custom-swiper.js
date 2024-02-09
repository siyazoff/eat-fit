const dietSwiper = new Swiper(".swiper-diet", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 1200,
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    prevEl: ".swiper-diet-prev",
    nextEl: ".swiper-diet-next",
  },
});

const trustSwiper = new Swiper(".swiper-trust", {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 1200,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-trust-prev",
    nextEl: ".swiper-trust-next",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const homeSwiper = new Swiper(".swiper-home", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1200,
  grabCursor: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".swiper-home-prev",
    nextEl: ".swiper-home-next",
  },
});
