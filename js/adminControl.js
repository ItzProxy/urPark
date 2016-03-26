/**
 * Created by Dionne on 3/25/2016.
 */
var moveMarker = document.getElementsByClassName("arrow");
var getLengthRange = document.getElementById("lengthOfMarker");
$(document).ready(function() {
    $('.arrow').click(moveMark);
});
$('').on("change mousemove", function() {
    $(this).next().html($(this).val());
});
function moveMark(e){
    var x = e.target;
    var checkArrow = x.innerHTML;
    var targetMark = marker.getLatLng();
    if(checkArrow.match(/←/g)){
        marker.setLatlng([targetMark.lat])
    }
    else if(checkArrow.match(/↑/g)){
        alert("HELLO");
    }
    else if(checkArrow.match(/→/g)){
        alert("HELLO");
    }
    else if(checkArrow.match(/↓/g)){

    }
}