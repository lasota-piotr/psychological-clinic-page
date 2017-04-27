const contact = require('../_includes/contact.hbs');
import jsonContact from '../contact.json';
import { googleMapsInit } from './helpers/googleMaps';

function rendercontact(jsonData) {
  const contactContainer = document.querySelector('#contact');
  contactContainer.innerHTML = contact(jsonData);
}

rendercontact(jsonContact);

googleMapsInit();
