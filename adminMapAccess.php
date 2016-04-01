<html>
<head>
    <meta charset=utf-8/>
    <title>urPark</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no'/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css">
    <link rel="stylesheet" type="text/css" href="css/custom.css">
    <link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-draw/v0.2.3/leaflet.draw.css' rel='stylesheet'/>
    <script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-draw/v0.2.3/leaflet.draw.js'></script>
    <script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-geodesy/v0.1.0/leaflet-geodesy.js'></script>
    <script src='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js'></script>
    <link href='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css' rel='stylesheet'/>
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        #map {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 80.55%;
        }
    </style>
</head>
<body>


<div id='map'></div>
<div id='length'></div>
<pre id='coordinates' class='ui-coordinates'></pre>
<script type="text/javascript" src="js/map.js"></script>
<script type="text/javascript" src="js/getCoord.js"></script>
<script type="text/javascript" src="js/createLine.js"></script>
<script type="text/javascript" src="js/adminControl.js"></script>
</body>
</html>
