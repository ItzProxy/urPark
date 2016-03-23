var coordinates = document.getElementById('coordinates');

var marker = L.marker([50.42041344110785,-104.57623958587646], {
    icon: L.mapbox.marker.icon({
      'marker-color': '#f86767'
    }),
    draggable: true
}).addTo(map);

// every time the marker is dragged, update the coordinates container
marker.on('dragend', ondragend);

// Set the initial marker coordinate on load.
ondragend();

function ondragend() {
    var m = marker.getLatLng();
    coordinates.innerHTML = 'Latitude: ' + m.lat + '<br />Longitude: ' + m.lng;
}
