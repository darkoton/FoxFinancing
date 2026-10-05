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

new Swiper('#reviews-slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  speed: 800,
  slidesPerGroup: 3,

  autoplay: {
    delay: 3500,
  },

  navigation: {
    prevEl: '.reviews-prev',
    nextEl: '.reviews-next',
  },

  pagination: {
    el: '#reviews-pagination',
    type: 'fraction',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,

      pagination: {
        el: '#reviews-pagination-bullets',
        clickable: true,
        type: 'bullets',
      },
    },

    639.8: {
      slidesPerView: 2,
      slidesPerGroup: 2,

      pagination: {
        el: '#reviews-pagination',
        type: 'fraction',
      },
    },

    991.8: {
      slidesPerView: 3,
      slidesPerGroup: 3,

      pagination: {
        el: '#reviews-pagination',
        type: 'fraction',
      },
    },
  },

  on: {
    init: updateReviewsPagination,
    breakpoint: updateReviewsPagination,
  },
});

function updateReviewsPagination(swiper) {
  if (swiper.currentBreakpoint === '0') {
    swiper.pagination.el = document.getElementById(
      'reviews-pagination-bullets',
    );
    swiper.pagination.destroy();
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  } else {
    swiper.pagination.el = document.getElementById('reviews-pagination');
    swiper.pagination.destroy();
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  }
}
