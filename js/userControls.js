/**
 * Created by Dionne on 3/28/2016.
 */
//general event listeners
var timeOfDay = "",
    lot = "",
    day = "";
//set default settings
window.onload = function () {
    var d = new Date();
    switch (d.getDay()) {//check day, and change day to that day
        case '1':
            day = "mon";
            break;
        case '2':
            day = "tues";
            break;
        case '3':
            day = "wed";
            break;
        case '4':
            day = "thu";
            break;
        case '5':
            day = "fri";
            break;
        default:
            day = "mon";
            break;
    }
    lot = "lot15"; //loads lot 15 automatically, dynamic if location detection was integrated
    if ((d.getHours() > 9 && d.getMinutes() >= 30) || (d.getHours() == 10 && d.getMinutes() < 30 && d.getMinutes() >= 30)) {//if time is past 0930 or less than 1030 then set timeOfday to 10:30am
        timeOfDay = "1030";
    }
    else if ((d.getHours() < 15 && d.getMinutes() < 1) || (d.getHours() >= 10 && d.getMinutes() >= 30)) {//if time is past 1030 and under 1501 set to 1330
        timeOfDay = "1330";
    }
    else {
        timeOfDay = "830";//otherwise set to 830
    }
    console.log(getData()); //update check
    plotLot();
};

$(document).ready(function () {
    $('#day').on('click', 'li', function () {
        day = $(this).attr('id');
        getData();
    }); //get id attribute of the id day
    $('#lot').on('click', 'li', function () {
        day = $(this).attr('id');
        getData();
    });
    $('#time').on('click', 'li', function () {
        day = $(this).attr('id');
        getData();
    });
});

function getData() {
    console.log("Time" + timeOfDay + "lot" + lot + "day" + day);
    var json_obj = {};
    json_obj.day = day;
    json_obj.lot = lot.substring(3);
    json_obj.time = timeOfDay;
    return JSON.stringify(json_obj); //create json object to parse later
}

function plotLot() {
    var layers = document.getElementById('menu-ui');
    var geoJsonFiles;
    $.ajax({
            method: "POST",
            url: "adminPanel.php",
            data: "yes"
        })
        .done(function (msg) {
            geoJsonFiles = JSON.stringify(msg);
            console.log(geoJsonFiles);
        });
    var lot15 = {
        'type': 'Feature',
        'properties': {'mapName': 'UofR', 'lotName': '15'},
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-104.59518671035765, 50.412975428679054],
                [-104.5947790145874, 50.41523156687315],
                [-104.59374904632568, 50.41524524011042],
                [-104.5937705039978, 50.412975428679054], [-104.59518671035765, 50.412975428679054]]]
        }
    };
    var lot14 = {
        'type': 'Feature',
        'properties': {'mapName': 'UofR', 'lotName': '14'},
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-104.58778381347656, 50.41634592276366],
                [-104.58776235580444, 50.41588104128443],
                [-104.58668947219849, 50.41588787780982],
                [-104.58670020103455, 50.416339086304376],
                [-104.58778381347656, 50.41634592276366]]]
        }
    };
    var lot13 = {
        'type': 'Feature',
        'properties': {
            'mapName': 'UofR',
            'lotName': '13'
        },
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-104.58510160446167, 50.41563492571319],
                [-104.5844042301178, 50.41564176227411],
                [-104.5844042301178, 50.415792166364554],
                [-104.58385705947876, 50.415792166364554],
                [-104.58384633064269, 50.41564176227411],
                [-104.58347082138062, 50.41562808915131],
                [-104.58342790603638, 50.415053814429704],
                [-104.58370685577393, 50.415053814429704],
                [-104.5837390422821, 50.414800857879506],
                [-104.58512306213379, 50.41481453124107],
                [-104.58510160446167, 50.41563492571319]]]
        }
    };
    var lot17 = {
        'type': 'Feature',
        'properties': {
            'mapName': 'UofR',
            'lotName': '17'
        },
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-104.58336353302, 50.41708425455985],
                [-104.58337426185608, 50.416291231061706],
                [-104.58247303962708, 50.4162707216572],
                [-104.5818293094635, 50.41700905462549],
                [-104.5819365978241, 50.41709109091162],
                [-104.58336353302, 50.41708425455985]]]
        }
    };
    var lot19 = {
        'type': 'Feature',
        'properties': {
            'mapName': 'UofR',
            'lotName': '19'
        },
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-104.58075642585754, 50.41807551526359],
                [-104.5804238319397, 50.41834896284179],
                [-104.5802092552185, 50.418677097851955],
                [-104.58074569702148, 50.41879331178965],
                [-104.58124995231628, 50.41832845432819],
                [-104.58075642585754, 50.41807551526359]]]
        }
    };
    var lot3 = {
        'type': 'Feature',
        'properties': {
            'mapName': 'UofR',
            'lotName': '3'
        },
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-104.58594918251038, 50.41951109743855],
                [-104.58528399467468, 50.41952476944057],
                [-104.58529472351073, 50.418622408841465],
                [-104.58598136901854, 50.41862924497122],
                [-104.58594918251038, 50.41951109743855]]]
        }
    };

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties.mapName && feature.properties.lotName) {
            layer.bindPopup("Lot:" + feature.properties.lotName);
        }
    }

    var style = {
        "fillColor": changeLineColor((Math.random() % 100))
    };

    addLayer(L.mapbox.featureLayer(lot3), 'Lot 3', 2);
    addLayer(L.mapbox.featureLayer(lot15), 'Lot 15', 2); //hard coded layers
    addLayer(L.mapbox.featureLayer(lot14), 'Lot 14', 2);
    addLayer(L.mapbox.featureLayer(lot13), 'Lot 13', 2);
    addLayer(L.mapbox.featureLayer(lot17), 'Lot 17', 2);
    addLayer(L.mapbox.featureLayer(lot19), 'Lot 19', 2);


    function addLayer(layer, name, zIndex) {
        layer
            .setStyle(style)
            .setZIndex(zIndex)
            .addTo(map);

        // Create a simple layer switcher that
        // toggles layers on and off.
        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.innerHTML = name;

        link.onclick = function (e) { //toggles the menu lots, removing layer if active or no active
            e.preventDefault();
            e.stopPropagation();

            if (map.hasLayer(layer)) {
                map.removeLayer(layer);
                this.className = '';
            } else {
                map.addLayer(layer);
                this.className = 'active';
            }
        };

        layers.appendChild(link);
    }
}

