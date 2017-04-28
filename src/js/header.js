const header = require('../_includes/header.hbs');
import linksJson from '../links.json';


export const renderHeader = function() {
  const headerContainer = document.querySelector('#header');
  headerContainer.innerHTML = header(linksJson);
}

/* Primary-nav menu
   ========================================================================== */
export const pageHeader = function() {
  function ready() {
    return new Promise(resolve => {
      	function checkState() {
					if (document.readyState !== 'loading') resolve();
				}
				document.addEventListener('readystatechange', checkState);
				checkState();	
    });
  }

  ready()
    .then(highlighActivePageLink);


  const pageHead = document.querySelector('.js-page-head');

  const menuBtn = document.querySelector('.js-nav-primary__menu-btn-wrapper');
  const navPrimary = document.querySelector('.js-nav-primary');
  

  function highlighActivePageLink() {
    const navLinksElements = document.querySelectorAll('.js-nav-primary__link');
    const mainEl = document.querySelector('.js-main');
    try {
      const currPage = mainEl.dataset.page;
      const navLinkToHighlight = [...navLinksElements].find(el => el.dataset.page === currPage);
      navLinkToHighlight.classList.add('c-nav-primary__link--active');
    } catch (e) {
      console.info(e.message);
    }
  }

  function menuBtnHandler(e) {
    navPrimary.classList.toggle('is-open');
    e.stopPropagation();
  }

  function scrollHandler() {
    if(window.scrollY >= 10) {
     pageHead.classList.add('is-scrolled');
    }
    if(window.scrollY < 10) {
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