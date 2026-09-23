new Swiper('#hero-banner', {
  slidesPerView: 1,
  spaceBetween: 15,
  grabCursor: true,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3500,
  },

  navigation: {
    prevEl: '#hero-banner-prev',
    nextEl: '#hero-banner-next',
  },

  pagination: {
    el: '#hero-banner-pagination',
    clickable: true,
  },

  breakpoints: {
    767.8: {},
  },
});
