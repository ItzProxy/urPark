/**
 * Created by Dionne on 3/22/2016.
 */
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
}
