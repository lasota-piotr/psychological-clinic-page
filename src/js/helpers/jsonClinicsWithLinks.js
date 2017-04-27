import jsonClinics from '../../clinics.json';
import linksJson from '../../links.json';

function getLinkFromName(element) {
  return linksJson.links[Object.keys(linksJson.links).find(linkEl => linkEl === element.name)];
}

function addLink(el) {
  return Object.assign({link: getLinkFromName(el)}, el);
}

const clinicsArr = jsonClinics[Object.keys(jsonClinics)[0]].map(addLink);

const jsonData = {[Object.keys(jsonClinics)[0]] : clinicsArr}

export const jsonClinicsWithLinks = jsonData;