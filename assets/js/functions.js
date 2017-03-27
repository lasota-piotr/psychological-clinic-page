(function() {
  'use strict';

  const menuBtn = document.querySelector('.js-nav-primary__menu-btn');

  function menuBtnHandler() {
    this.closest('.js-nav-primary').classList.toggle('is-open');
  }

  menuBtn.addEventListener('click', menuBtnHandler);
}());
