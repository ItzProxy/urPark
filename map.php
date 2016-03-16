<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title></title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.15.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.15.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:2em; bottom:1em; width:80%; }
    </style>
</head>
<body>

<div id='map'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiaXR6cHJveHkiLCJhIjoiY2lsdjhpcDRiMDFoOHVia3NxMXJjejg0NyJ9.BylAtBOCzmlgaLrUk9RarA';
var bounds = [
    [-104.5958089828491,50.41256521019116], // Southwest coordinates
    [-104.57950115203857, 50.42000328702555]  // Northeast coordinates   
  ]
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    //center:[-74.50, 70], //these are the University of Regina's coordinates
    zoom: 5, // starting zoom
    maxBounds: bounds
});
</script>

</body>
</html>
