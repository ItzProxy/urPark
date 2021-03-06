/**
 * Created by Dionne on 3/22/2016.
 */
var all_drawn_array = [];
var polyline = [];//all instances of a saved lines

/*
 Function - changes the color the line based on
 */
function changeLineColor(rowStatistic) { //Changing color of row lines
    var color = "";
    if (rowStatistic <= 0.25) {
        color = "#ff0000"; //set to red(less than 25% chance to get row
    }
    else if (rowStatistic > 0.25 && rowStatistic < 0.50) {
        color = "#ffbf00"; //set to orange(less than 50% but greater than 25% to get row
    }
    else if (rowStatistic > 0.50 && rowStatistic < 0.75) {
        color = "#ffff00"; //set to yellow(less than 75% but greater than 50% to get row
    }
    else {
        color = "#00ff00"; //set to green(greater than 75%
    }
    console.log(color);
    return color;
}
/*
 Function: Draws a line between 2 markers on map, saves the coordinates used into an array and calls printAllInArray
 with the array coordinates
 */
function draw_line() {
    var m = marker.getLatLng(),
        n = lenMarker.getLatLng();
    var line_draw = [m, n];
    var line = L.polyline;
    polyline.push(L.polyline(line_draw, changeLineColor(0.25)
    ).addTo(map));
    var popup = L.popup()
        .setLatLng(m)
        .setContent("Row: " + (all_drawn_array.length + 1))
        .openOn(map);
    all_drawn_array.push(line_draw);
    printAllInArray(all_drawn_array);
}

//prints all coordinates to a 'print' div
function printAllInArray(polylineArray) {
    var printTo = document.getElementById('print');
    console.log(polylineArray.length);
    printTo.innerHTML = "";
    var currRow = 1;
    for (var i = 0; i < polylineArray.length; i++) {
        // if (done) {
        printTo.innerHTML += "<button type='button' class='btn btn-info' data-toggle='collapse' data-target=#row" + currRow + ">" +
            "Row: " + currRow + "</button> <br /> <div id='row" + currRow + "' class='collapse'>";
        var mapData = 'Start:' + polylineArray[i][0].lat + ',<br /> ' + polylineArray[i][0].lng +
            '<br/>End:' + polylineArray[i][1].lat + ',<br /> ' + polylineArray[i][1].lng;
        $("<div />").append(mapData).appendTo("#row" + currRow);//append starting point data to div
        var rowData = '<input type="number" name="totalSpots" placeholder="Total Spots" />' +
            '<input type="number" name="filledSpots" placeholder="Filled Spots"/>';
        $("<div />").append(rowData).appendTo("#row" + currRow);//append starting point data to div
        currRow++; //currRow = i + 1;
    }
}
//send coords in the format [latStart, lngStart], [latEnd, lngEnd], ...

function deleteCurrentMapCoordData() {
    all_drawn_array = []; //empty the array to reset the displayed information
    saveRowGeoJson = {}; //empty the array
    printAllInArray(all_drawn_array); //clear out the print div in adminPanel
}
//getters
function getCurrentPolyLineObj() {
    return polyline; //return the variable polyline
}

