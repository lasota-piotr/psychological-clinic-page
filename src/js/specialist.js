const specialist = require('../_includes/specialist.hbs');

function renderspecialist() {
  const specialistContainer = document.querySelector('#specialist');
  specialistContainer.innerHTML = specialist();
}

renderspecialist();