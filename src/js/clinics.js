import clinics from '../_includes/clinics.hbs';
import { jsonClinicsWithLinks } from './helpers/jsonClinicsWithLinks';

function renderclinics(jsonData) {
  const clinicsContainer = document.querySelector('#clinics');
  clinicsContainer.innerHTML = clinics(jsonData);
}

renderclinics(jsonClinicsWithLinks);

