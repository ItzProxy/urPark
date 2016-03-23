<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title></title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js'></script>
    <link href='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; height:auto; top:2em; bottom:1em; width:80.55%; }
    </style>
</head>
<body>

<div id='map'></div>
<div id='length'></div>
<pre id='coordinates' class='ui-coordinates'></pre>
<!--<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiaXR6cHJveHkiLCJhIjoiY2lsdjhpcDRiMDFoOHVia3NxMXJjejg0NyJ9.BylAtBOCzmlgaLrUk9RarA';
var bounds = [
    [-104.59709644317627,50.41278399382671], // Southwest coordinates
    [-104.57623958587646, 50.42041344110785]  // Northeast coordinates   
  ]
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    //center:[-74.50, 70], //these are the University of Regina's coordinates
    zoom: 5, // starting zoom
    maxBounds: bounds
});
</script> -->
<script type="text/javascript" src="js/map.js"></script>
<script type="text/javascript" src="js/getCoord.js"></script>
<script type="text/javascript" src="js/createLine.js"></script>
</body>
</html>
