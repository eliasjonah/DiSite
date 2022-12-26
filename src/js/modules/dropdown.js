function dropdown () {
  const btns = document.querySelectorAll('.faq__btn');

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });


  // JQuery

  $(function () {
    $('.faq__btn').click(function () {
      $(this).toggleClass(' active ');
      $(this).siblings().removeClass(' active ');
      $('.faq__content').stop().slideUp(300);
      $('.active ~ .faq__content').stop().slideDown(300);
      return false;
    });
  });
}

export {dropdown};
