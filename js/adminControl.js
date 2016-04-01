/**
 * Created by Dionne on 3/25/2016.
 */
/*
 Jquery event listeners
 In order:
 check if class
 */
$(document).ready(function () {
    $('#openLotDraw').click(function () {
        createLotCreator();
        $(this).attr("disabled", true);
        $(this).html("Lot Tools Opened")
    });
    $('.arrow').click(moveMark); //orient the blue marker based on the red marker
    $('#draw').click(draw_line); //draw line in admin Panel: createLine.js
    $('#clear').click(clearDrawnLines); //clear drawn lines on map
    $('#saveCoords').click(saveData); //send data to server
});
$('.range').on("change", function () { //jquery event listeners for change on range
    var lenY = $("#lenY").val();
    var lenX = $("#lenX").val();
    changeLen(lenX, lenY);
});
/*
 Function: display errors on admin panel from functions, and used for debugging without use of console.log
 */
function error(typeError, message) {
    var errorPanel = $('#error');
    var errorShown;
    switch (typeError) {
        case "OK":
            errorShown = "success";
            break;
        case "BAD":
            errorShown = "danger";
            break;
        case "WARN":
            errorShown = "warning";
            break;
        case "INFO":
            errorShown = "info";
            break;
        default:
            errorShown = typeError;
    }
    var displayError = '<div class="alert alert-' + errorShown + 'success">' +
        '<strong>' + errorShown + '</strong>: ' + message + '</div>';
    errorPanel.html(displayError);
}
function createLotCreator() {
    var featureGroup = L.featureGroup().addTo(map);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: featureGroup
        },
        draw: {
            map: true,
            polyline: false,
            rectangle: false,
            circle: false,
            marker: false
        }
    }).addTo(map);

//map.on('draw:created', showPolygonArea);
    map.on('draw:created', showPolygonArea);
    map.on('draw:edited', showPolygonAreaEdited);
    //recreates if polygon is in need of editing
    function showPolygonAreaEdited(e) {
        e.layers.eachLayer(function (layer) {
            showPolygonArea({layer: layer});
        });
    }

    //creates polygon
    function showPolygonArea(e) {
        var mn = $('#mapName').val();
        var ln = $('#lotName').val();
        if (mn == "" || ln == "") { //error checking for empty
            var errorMsg = "mapName or lotName are empty!";
            error("BAD", errorMsg);
            return;
        }
        featureGroup.addLayer(e.layer);
        var type = e.layerType;
        var layer = e.layer;
        var shape = layer.toGeoJSON();
        shape.properties.mapName = mn;
        shape.properties.lotName = ln;
        var shape_for_db = JSON.stringify(shape);
        error("OK", shape_for_db);
    }
}
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
function saveData() {
    var Coords = getCoordData();
    if (Coords.length == 0) {//if empty return back to calling function
        return;
    }
    var data_stream = JSON.stringify(Coords);
    $.ajax({
            method: "POST",
            url: "adminPanel.php",
            datatype: "json",
            data: {Coordinates: data_stream}
        })
        .done(function (msg) {
            var out = JSON.stringify(msg);
            console.log(out);
        });
}

function update_user_data(response) {
    $.ajax({
        type: "POST",
        dataType: 'json',
        data: response,
        url: 'adminPanel.php',
        success: function (msg) {
            if (msg.error == 1) {
                alert('Something Went Wrong!');
            }
        }
    });
}

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://yourbackend.example.com/tokensignin');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);
}