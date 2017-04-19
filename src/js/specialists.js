const specialists = require('../_includes/specialists.hbs');

function renderspecialists() {
  const specialistsContainer = document.querySelector('#specialists');
  specialistsContainer.innerHTML = specialists();
}

renderspecialists();