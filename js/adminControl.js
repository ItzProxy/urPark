/**
 * Created by Dionne on 3/25/2016.
 */
var moveMarker = document.getElementsByClassName("arrow");
var getLengthRange = document.getElementById("lengthOfMarker");

$(document).ready(function() {
    $('.arrow').click(moveMark); //orient the blue marker based on the red marker
    $('#draw').click(draw_line); //draw line in admin Panel: createLine.js
    $('#clear').click(clearDrawnLines); //clear drawn lines on map
});
$('.range').on("change mouseover", function () { //jquery eventlisteners for change on range
    var lenY = $("#lenY").val();
    var lenX = $("#lenX").val();
    changeLen(lenY, lenX);
});
/*
 Function: Based on arrow clicked using regex, changes the orientation of the second marker(blue) relative
 to the base marker(red) on the map
 */
function moveMark(e){
    var x = e.target;
    var checkArrow = x.innerHTML;
    var targetMark = marker.getLatLng();
    if(checkArrow.match(/←/g)){
        currentWid = (-1) * Math.abs(currentWid);
    }
    else if(checkArrow.match(/↑/g)){
        currentLen = Math.abs(currentLen);
    }
    else if(checkArrow.match(/→/g)){
        currentWid = Math.abs(currentWid);
    }
    else if(checkArrow.match(/↓/g)){
        currentLen = (-1) * Math.abs(currentLen);
    }
    ondragend(); //updates the location of second marker based on the array clicked relative to the first marker
}
/*
 Function: Use range bar id(lenX and lenY) and take the percentage of those values
 multiply it by a random hardcoded value
 then update the markers using ondraend();
 */
function changeLen(lenX,lenY){
    currentLen = lenY/100*0.0034117698669433594;//some random value for length of parking lot row
    currentWid = lenX/100*0.0034117698669433594;//some random value for length of parking lot row
    ondragend(); //update marker
}

function clearDrawnLines() {
    var polyObj = getCurrentPolyLineObj();
    map.removeLayer(polyObj);
}


$.ajax({
    url: '/urPark/adminPanel.php',
    data: {format: 'json'},
    type: 'post',
    success: function (output) {
        alert(output);
    }
});