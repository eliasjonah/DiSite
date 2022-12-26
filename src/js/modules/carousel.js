function carousel () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.carousel__slider', {
    centeredSlides: true,
    loop: true,
    speed: 1500,
    slidesPerView: 'auto',
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}

export {carousel};
