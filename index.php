<?php include 'header.php'?>
<?php include 'side-nav.php'?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title>Parking Pal</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<style>
urMap {
    width: 100%;
}
</style>
</head>

<body>
	<!--
<div class="container-fluid">
  <h1>My First Bootstrap Page</h1>      
  <p>This part is inside a .container-fluid class.</p> 
  <p>The .container-fluid class provides a full width container, spanning the entire width of the viewport.</p>           
</div>
-->
	<!-- Here is where the ajax/jquery request goes to get the map according to the selection
	 Request or store in cache/cookies is the way to do this --> 
	<div class="overlayMap">
		
	</div>
	<div class="mapResize">
		<div class="well">
			<img src="Maps/urMap.png" class="img-responsive" alt="urMap">
		</div>
	</div>
</body>

</html>