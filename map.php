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
<script type="text/javascript" src="js/map.js"></script>
<script type="text/javascript" src="js/createLine.js"></script>
</body>
</html>
