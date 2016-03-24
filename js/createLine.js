/**
 * Created by Dionne on 3/22/2016.
 */
var all_drawn_array = [];
var draw_button = document.getElementById('draw');
var color_button = document.getElementById('colorOfLine');
var polyline_options = {
    color: '#000'
};

draw_button.addEventListener('click', draw_line); //event listener
color_button.addEventListener('click', changeLineColor);//event listener
function changeLineColor(){ //Changing color of row lines
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color_button.innerHTML = '' + color + '';
    polyline_options.color = color;
}
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
