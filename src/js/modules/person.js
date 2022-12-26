function person () {
  const tabsBtns = document.querySelectorAll('.person__btn');
  const tabsItems = document.querySelectorAll('.person__about');

  tabsBtns.forEach((item) => {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      console.log(tabId);

      tabsBtns.forEach((item) => {item.classList.remove('active');});
      tabsItems.forEach((item) => {item.classList.remove('active');});

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    });
  });

}

export {person};
