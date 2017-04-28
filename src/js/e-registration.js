const template = require('../_includes/e-registration.hbs');

function renderTemplate() {
  const container = document.querySelector('#e-registration');
  container.innerHTML = template();
}

renderTemplate();
