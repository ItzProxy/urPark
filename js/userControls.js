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
            break
        case '2':
            day = "tues";
            break;
        case '3':
            day = "wed";
            break;
        case '4':
            day = "thu";
            break
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
}

$(document).ready(function () {
    $('#day').on('click', 'li', function () {
        day = $(this).attr('id');
        getData();
    }) //get id attribute of the id day
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
