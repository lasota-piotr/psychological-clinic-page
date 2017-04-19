const specialists = require('../_includes/specialists.hbs');
import jsonSpecialists from '../specialists.json';

function renderspecialists(jsonData) {
  const specialistsContainer = document.querySelector('#specialists');
  specialistsContainer.innerHTML = specialists(jsonData);
}

renderspecialists(jsonSpecialists);