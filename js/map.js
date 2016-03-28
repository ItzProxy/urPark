L.mapbox.accessToken = 'pk.eyJ1IjoiaXR6cHJveHkiLCJhIjoiY2lsdjhpcDRiMDFoOHVia3NxMXJjejg0NyJ9.BylAtBOCzmlgaLrUk9RarA';
/*
 var southWest = L.latLng(-104.59709644317627,50.41278399382671),
 northEast = L.latLng(-104.57623958587646, 50.42041344110785),
 bounds = L.latLngBounds(southWest, northEast);  //bounds

 */
var southWest = L.latLng(50.42041344110785, -104.57623958587646),
    northEast = L.latLng(50.41278399382671, -104.59709644317627),
    bounds = L.latLngBounds(northEast, southWest);  //bounds

var map = L.mapbox.map('map', 'mapbox.streets', {
    // set that bounding box as maxBounds to restrict moving the map
    maxBounds: bounds,
    maxZoom: 17,
    minZoom: 16
});
//zoom to bound
map.fitBounds(bounds);

