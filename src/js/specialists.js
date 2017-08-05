import VanillaModal from 'vanilla-modal';
const specialists = require('../_includes/specialists.hbs');
import jsonSpecialists from '../specialists.json';

function renderspecialists(jsonData) {
  const specialistsContainer = document.querySelector('#specialists');
  specialistsContainer.innerHTML = specialists(jsonData);
}

renderspecialists(jsonSpecialists);

const modal = new VanillaModal({
  modal: '.js-modal',
  modalInner: '.js-modal__inner',
  modalContent: '.js-modal__content',
  loadClass: 'has-loaded-modal',
  class: 'has-visible-modal'
});