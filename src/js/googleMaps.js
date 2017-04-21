export const googleMapsInit = function() {
  function initMap() {
    const uluru = {lat: 50.9461205, lng: 21.4031388};
    const map = new google.maps.Map(document.querySelector('.js-map'), {
      zoom: 14,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  window.initMap = initMap;

  const scriptEl = document.createElement('script');
  scriptEl.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCu7bLtE7MdfThZ7l2VTx8pndKkzKrvD4M&callback=initMap";
  scriptEl.async = true;
  scriptEl.defer = true;
  document.body.appendChild(scriptEl);
}




