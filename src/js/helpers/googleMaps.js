import jsonContact from '../../contact.json';

export const googleMapsInit = function() {
  function initMap() {
    const uluru = {lat: jsonContact.contact[0].lat, lng: jsonContact.contact[0].lng};
    const map = new google.maps.Map(document.querySelector('.js-map'), {
      zoom: 14,
      center: uluru,
      scrollwheel: false
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

    const infowindow = new google.maps.InfoWindow();
    infowindow.setContent(`
      <a href="${jsonContact.contact[0].googleMapsLink}" target="_blank">
        <h4 class="u-h6 u-margin-bottom-small">${jsonContact.contact[0].name}</h4>
      </a>
      ${jsonContact.contact[0].address
        .join('<br>')}
    `);
    infowindow.open(map, marker);

    marker.addListener('click', function() {infowindow.open(map, this);}); 
  }
  window.initMap = initMap;

  const scriptEl = document.createElement('script');
  scriptEl.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCu7bLtE7MdfThZ7l2VTx8pndKkzKrvD4M&callback=initMap";
  scriptEl.async = true;
  scriptEl.defer = true;
  document.body.appendChild(scriptEl);
}




