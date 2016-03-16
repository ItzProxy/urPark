<?php include 'header.php'?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title>Parking Pal</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>

	<!-- Here is where the ajax/jquery request goes to get the map according to the selection
	 Request or store in cache/cookies is the way to do this --> 
	<div class="overlayMap">
		
	</div>
	<?php include'side-nav.php'?>
	<section id="map">
			<img src="Maps/urMap.png" class="img-responsive" alt="urMap">
	</section>
</body>

</html>