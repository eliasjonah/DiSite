function heroes () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.heroes__slider', {
    centeredSlides: true,
    loop: true,
    speed: 3000,
    slidesPerView: 'auto',
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });
}

export {heroes};
