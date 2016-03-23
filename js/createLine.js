/**
 * Created by Dionne on 3/22/2016.
 */
var all_drawn_array = [];
var draw_button = document.getElementById('draw')
var polyline_options = {
    color: '#000'
};

draw_button.addEventListener('click', draw_line); //event listener

function draw_line(){
    var m = marker.getLatLng(),
        n = lenMarker.getLatLng();
    var line_draw = [m,n];
    var polyline = L.polyline(line_draw, polyline_options).addTo(map);
    all_drawn_array.push(m,n);
    printAllInArray(line_draw);
}
//prints all coordinates to a 'print' div
function printAllInArray(polylineArray){
var printTo = document.getElementById('print');
var done = true;
for(var i = 0; i < polylineArray.length; i++){
    if(done){
        printTo.innerHTML += polylineArray[i].lat + ',' + polylineArray[i].lng + '<br />';
        done = false;
    }
    else{
        printTo.innerHTML += 'to ' + polylineArray[i].lat + ',' + polylineArray[i].lng + '<br />';
        done = true;
    }
}
}
