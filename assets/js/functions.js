(function() {
  'use strict';

  /* Primary-nav menu
    ========================================================================= */

  const menuBtn = document.querySelector('.js-nav-primary__menu-btn-wrapper');
  const navPrimary = document.querySelector('.js-nav-primary');

  function menuBtnHandler(e) {
    navPrimary.classList.toggle('is-open');
    e.stopPropagation();
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

}());
