<?php

/**
 * Created by PhpStorm.
 * User: Dionne
 * Date: 3/25/2016
 * Time: 1:55 PM
 */
class admin
{
    public $adminToolbar = "<nav class='right'>";
    public $controller = "<button id=";
    public function showConstant(){
        echo $this -> adminToolbar;
    }
    public function createPanel(){
        for($i = 0; $i < 4; $i++){
            echo $adminButton = $this->controller."arrow".$i." class='arrow'>&#859".($i+2)."</button>".PHP_EOL;
        }
        $adminDrawLine = $this->controller."draw>"."Click To Draw</button>".PHP_EOL;
        echo $adminDrawLine;
        echo '<div id="print"></div>';
        echo '</nav>';
    }
}

$admin = new admin();
$admin ->showConstant();
$admin ->createPanel();
require_once ("adminheader.php");
include ("map.php");
