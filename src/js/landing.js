const landing = require('../_includes/landing.hbs');

function renderLanding() {
  const landingContainer = document.querySelector('#landing');
  landingContainer.innerHTML = landing();
}

renderLanding();