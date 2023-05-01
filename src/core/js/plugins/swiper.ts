import Swiper, { Autoplay, Navigation, Pagination, SwiperOptions } from 'swiper';

export const swiper = () => {
  const optionsSwiper = {
    loop: true,
    modules: [Autoplay, Navigation, Pagination],
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
    },
  };

  new Swiper('#swiper-banner', {
    ...optionsSwiper,
    // clickable: true,
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    // lazy: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });

  new Swiper('#swiper-product', {
    ...optionsSwiper,
    // clickable: true,
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    // lazy: true,

    slidesPerView: 5,
    spaceBetween: 5,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 3,
      },

      876: {
        slidesPerView: 4,
        spaceBetween: 4,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
    },
  } as SwiperOptions);

  new Swiper('#swiper-preview-product', {
    loop: true,
    modules: [Navigation],
    direction: 'horizontal',
    effect: 'fade',
    // lazy: true,
    // Navigation arrows
    slidesPerView: 4,
    spaceBetween: 1,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });
};
