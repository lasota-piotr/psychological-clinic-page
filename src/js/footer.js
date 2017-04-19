const footer = require('../_includes/footer.hbs');

export const renderFooter = function() {
  const footerContainer = document.querySelector('#footer');
  footerContainer.innerHTML = footer();
}
