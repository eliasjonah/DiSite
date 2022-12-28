function burger () {

  const toggle = document.querySelector('.third-button');
  const icon = document.querySelector('.animated-icon');
  const nav = document.querySelector('.header__nav');
  const navItem = document.querySelectorAll('.header__nav-item');

  toggle.addEventListener('click', () => {
    icon.classList.toggle('open');
    nav.classList.toggle('open');
  });

  navItem.forEach((item) => {
    item.addEventListener('click', () => {
      icon.classList.toggle('open');
      nav.classList.toggle('open');
    });
  });
}
export {burger};
