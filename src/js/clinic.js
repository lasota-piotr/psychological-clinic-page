const clinics = require('../_includes/clinic.hbs');
import jsonClinics from '../clinics.json';

export function renderClinics(clinicName) {
  function findElWithName(jsonD, nameStr) {
    const firstObj = Object.keys(jsonClinics)[0];
    return {
      [firstObj]: jsonD[firstObj].filter(el => el.name === nameStr)
    }
  }

  const clinicContainer = document.querySelector('#clinic');
  const jsonDataFiltered = findElWithName(jsonClinics, clinicName);
  clinicContainer.innerHTML = clinics(jsonDataFiltered);
}
