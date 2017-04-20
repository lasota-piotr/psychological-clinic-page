const clinics = require('../_includes/clinics.hbs');
import jsonClinics from '../clinics.json';

function renderclinics(jsonData) {
  const clinicsContainer = document.querySelector('#clinics');
  clinicsContainer.innerHTML = clinics(jsonData);
}

renderclinics(jsonClinics);