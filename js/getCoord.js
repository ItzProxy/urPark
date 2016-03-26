
var currentWid = 0.0012445449829101562; //public variable for width(longitude)
var currentLen = 0.0012445449829101562; //public variable for length(latitude)
var coordinates = document.getElementById('coordinates');
var marker = L.marker([50.41454789997864,-104.59364175796509], {
    icon: L.mapbox.marker.icon({
      'marker-color': '#f86767'
    }),
    draggable: true
}).addTo(map);

var lenMarker = L.marker([50.41454789997864,-104.59364175796509], {
    icon: L.mapbox.marker.icon({
      'marker-color': '#0066ff'
    }),
    draggable: false
}).addTo(map);

// every time the marker is dragged, update the coordinates container
marker.on('dragend', ondragend);

// Set the initial marker coordinate on load.
ondragend();

function ondragend() { //drag the function and debug the length between two markers
    var m = marker.getLatLng(),
        n = lenMarker.getLatLng();
    lenMarker.setLatLng([m.lat + currentLen,m.lng + currentWid]);
    coordinates.innerHTML = 'Latitude: ' + m.lat + '<br />' +
                            'Longitude: ' + m.lng + '<br />' +
                            'LengthX:' + Math.abs(n.lng - m.lng) +
        '<br />LengthY:' + Math.abs(n.lat - m.lat);
}

