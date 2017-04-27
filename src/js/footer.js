const footer = require('../_includes/footer.hbs');
import jsonContact from '../contact.json';
import linksJson from '../links.json';

const jsonData = {
  [Object.keys(jsonContact)[0]] : jsonContact[Object.keys(jsonContact)[0]],
  [Object.keys(linksJson)[0]] : linksJson[Object.keys(linksJson)[0]]
}


export const renderFooter = function() {
  const footerContainer = document.querySelector('#footer');
  footerContainer.innerHTML = footer(jsonData);
}
