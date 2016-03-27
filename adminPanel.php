<?php

/**
 * Created by PhpStorm.
 * User: Dionne
 * Date: 3/25/2016
 * Time: 1:55 PM
 */
class admin
{
    private $adminToolbar = "<nav class='right'>";
    private $controller = "<button id=";
    private $lenY = 0;
    private $lenX = 0;
    public function showConstant(){
        echo $this -> adminToolbar;
    }
    public function createPanel(){
        for($i = 0; $i < 4; $i++){
            echo $adminButton = $this->controller."arrow".$i." class='arrow'>&#859".($i+2)."</button>".PHP_EOL;
        }
        $adminDrawLine = $this->controller."draw>"."Click To Draw</button>".PHP_EOL;
        echo $adminDrawLine;
        $adminSaveResults = $this->controller."saveCoords>"."Click To Save</button>".PHP_EOL;
        echo $adminSaveResults;
        $adminYAdjust = "LenY:<input type='range' id='lenY' value='".$this->lenY."'>".PHP_EOL;
        $adminXAdjust = "LenX:<input type='range' id='lenX' value='".$this->lenX."'>".PHP_EOL;
        echo "<div class='range'>";
        echo $adminXAdjust.PHP_EOL;
        echo $adminYAdjust;
        echo "</div>".PHP_EOL;
        $adminRemoveLines = $this->controller . 'clear>Clear Map of Drawn Lines</button>' . PHP_EOL;
        echo $adminRemoveLines;
        echo '<div id="print"></div>';
        echo '</nav>';
    }

    public function getMapData()
    { //get data from client
        if (isset($_POST['Coordinates']) && !empty($_POST['Coordinates'])) {
            $mapData = $_POST['mapData'];
            echo json_encode($mapData);
        }
    }
}

$admin = new admin();
$admin ->showConstant();
$admin ->createPanel();
$admin->getMapData();
require_once ("adminheader.php");
include ("map.php");
