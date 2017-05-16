require('smoothscroll-polyfill').polyfill();
const landing = require('../_includes/landing.hbs');
import linksJson from '../links.json';
import jsonContact from '../contact.json';
import jsonClinics from '../clinics.json';



function renderLanding(jsonData) {
  const landingContainer = document.querySelector('#landing');
  landingContainer.innerHTML = landing(jsonData);
}

renderLanding(Object.assign(jsonContact, linksJson, jsonClinics));

const clinicsBtnInit = () => {
  function clinicsBtnHandler(e) {
    e.preventDefault();
    
    const clinicsBtnIdArr = clinicsBtn.href
                            .split('/')
                            .find((el) => el.includes('#'))
                            .split('#');
    const clinicsBtnId = clinicsBtnIdArr[clinicsBtnIdArr.length - 1];
    goToId(clinicsBtnId);
  }

  const clinicsBtn = document.querySelector('.js-clinics-btn');
  clinicsBtn.addEventListener('click', clinicsBtnHandler);


  function goToId(idEl) {
    // Go to ID
    document.getElementById(idEl).scrollIntoView({behavior: 'smooth'});

    // Change URL
    window.history.pushState(null, idEl, '#' + idEl);
  }
};

clinicsBtnInit();
