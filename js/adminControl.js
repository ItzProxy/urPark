/**
 * Created by Dionne on 3/25/2016.
 */
var moveMarker = document.getElementsByClassName("arrow");
var getLengthRange = document.getElementById("lengthOfMarker");

$(document).ready(function() {
    $('.arrow').click(moveMark);
});
$('.range').on("change", function() {
    var lenY = $("#lenY").val();
    var lenX = $("#lenX").val();
    changeLen(lenY,lenX)
});
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
function changeLen(lenX,lenY){
    console.log(lenX/100+" "+lenY/100);
    currentLen = lenY/100*0.0034117698669433594;//some random value for length of parking lot row
    currentWid = lenX/100*0.0034117698669433594;//some random value for length of parking lot row
    ondragend();
}