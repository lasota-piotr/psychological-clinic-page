const footer = require('../_includes/footer.hbs');
import jsonContact from '../contact.json';

export const renderFooter = function() {
  const footerContainer = document.querySelector('#footer');
  footerContainer.innerHTML = footer(jsonContact);
}
