const header = require('../_includes/header.hbs');

export const renderHeader = function() {
  const headerContainer = document.querySelector('#header');
  headerContainer.innerHTML = header();
}

/* Primary-nav menu
   ========================================================================== */
export const pageHeader = function() {

  const pageHead = document.querySelector('.js-page-head');

  const menuBtn = document.querySelector('.js-nav-primary__menu-btn-wrapper');
  const navPrimary = document.querySelector('.js-nav-primary');

  function menuBtnHandler(e) {
    navPrimary.classList.toggle('is-open');
    e.stopPropagation();
  }

  function scrollHandler() {
    if(window.scrollY >= 50) {
     pageHead.classList.add('is-scrolled');
    }
    if(window.scrollY < 50) {
      pageHead.classList.remove('is-scrolled');
    }
  }

  /**
   * Close menu, if clicked outside menu
   */
  function documentClickHandler() {
    navPrimary.classList.remove('is-open');
  }

  menuBtn.addEventListener('click', menuBtnHandler);
  navPrimary.addEventListener('click', function navPrimaryHandler(e) {
    e.stopPropagation();
  });
  document.addEventListener('click', documentClickHandler);


  document.addEventListener('scroll', scrollHandler);
};
