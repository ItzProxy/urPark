/**
 * Created by Dionne on 3/25/2016.
 */
/*
 Jquery event listeners
 In order:
 check if class
 */
$(document).ready(function () {
    $('.arrow').click(moveMark); //orient the blue marker based on the red marker
    $('#draw').click(draw_line); //draw line in admin Panel: createLine.js
    $('#clear').click(clearDrawnLines); //clear drawn lines on map
    $('#saveCoords').click(saveData); //send data to server
});
$('.range').on("change", function () { //jquery event listeners for change on range
    var lenY = $("#lenY").val();
    var lenX = $("#lenX").val();
    changeLen(lenY, lenX);
});
/*
 Function: Based on arrow clicked using regex, changes the orientation of the second marker(blue) relative
 to the base marker(red) on the map
 */
function moveMark(e) {
    var x = e.target;
    var checkArrow = x.innerHTML;
    if (checkArrow.match(/←/g)) {
        currentWid = (-1) * Math.abs(currentWid);
    }
    else if (checkArrow.match(/↑/g)) {
        currentLen = Math.abs(currentLen);
    }
    else if (checkArrow.match(/→/g)) {
        currentWid = Math.abs(currentWid);
    }
    else if (checkArrow.match(/↓/g)) {
        currentLen = (-1) * Math.abs(currentLen);
    }
    ondragend(); //updates the location of second marker based on the array clicked relative to the first marker
}
/*
 Function: Use range bar id(lenX and lenY) and take the percentage of those values
 multiply it by a random hardcoded value
 then update the markers using ondraend();
 */
function changeLen(lenX, lenY) {
    currentLen = lenY / 100 * 0.0034117698669433594;//some random value for length of parking lot row
    currentWid = lenX / 100 * 0.0034117698669433594;//some random value for length of parking lot row
    ondragend(); //update marker
}

function clearDrawnLines() {
    var polyObj = getCurrentPolyLineObj();
    while (polyObj.length != 0) {
        map.removeLayer(polyObj.pop());
    }
    deleteCurrentMapCoordData();
}

function constructMapData() {
    var Coords = getCurrentPolyLineObj();
    var mapDataObj = {};
}
function saveData() {
    var Coords = getCoordData();
    if (Coords.length == 0) {//if empty return back to calling function
        return;
    }
    var data_stream = "[";
    for (var x = 0; x < Coords.length; x++) {
        data_stream += '{' +
            '"startLat":' + Coords[x][0].lat + ',' +
            '"startLng":' + Coords[x][0].lng + ',' +
            '"endLat":' + Coords[x][1].lat + ',' +
            '"endLng":' + Coords[x][1].lng + '}';
        console.log(data_stream);
    }
    data_stream += ']';

    $.ajax({
            method: "POST",
            url: "adminPanel.php",
            datatype: "json",
            data: {Coordinates: Coords},
        })
        .done(function (msg) {
            alert('hello2');
            var out = JSON.stringify(msg);
            //for (var i = 0; i < msg.length; i++) {
            //    out += "lat: " + msg[i].lat + " lng: " + msg[i].lng + "\n";
            //}
            console.log(out);
        });
}