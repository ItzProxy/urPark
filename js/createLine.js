/**
 * Created by Dionne on 3/22/2016.
 */
var all_drawn_array = [];
var polyline = [];//all instances of a saved lines
var polyline_options = {
    color: '#000'
};

function getData(){
    
}
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
    color_button.innerHTML = '' + color + '';
    polyline_options.color = color;
}
function draw_line() {
    var m = marker.getLatLng(),
        n = lenMarker.getLatLng();
    var line_draw = [m, n];
    polyline.push(L.polyline(line_draw, polyline_options).addTo(map));
    all_drawn_array.push(m, n);
    printAllInArray(all_drawn_array);
}

//prints all coordinates to a 'print' div
function printAllInArray(polylineArray) {
    var printTo = document.getElementById('print');
    var done = true;
    console.log(polylineArray.length);
    printTo.innerHTML = "<form id='map_submit'>";
    for (var i = 0; i < polylineArray.length; i++) {
        if (done) {
            printTo.innerHTML += '<input id="start-"' + i + '>' + polylineArray[i].lat + '</input>'
                + '<textbox id="startEnd-"' + i + '>' + polylineArray[i].lng + '</textbox>' + '<br />';
            done = false;
        }
        else {
            printTo.innerHTML += 'to ' + polylineArray[i].lat + ',' + polylineArray[i].lng + '<br />';
            done = true;
        }
    }
    printTo += "</form>";
}
//send coords in the format [latStart, lngStart], [latEnd, lngEnd], ...
function sendCoordData() {
    return all_drawn_array;
}

function deleteCurrentMapCoordData() {
    all_drawn_array = []; //empty the array to reset the displayed information
    printAllInArray(all_drawn_array); //clear out the print div in adminPanel
}
//getters
function getCurrentPolyLineObj() {
    return polyline; //return the variable polyline
}
