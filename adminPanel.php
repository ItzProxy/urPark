<?php

/**
 * Created by PhpStorm.
 * User: Dionne
 * Date: 3/25/2016
 * Time: 1:55 PM
 */
class admin
{
    //server variables
    private $hostname = "localhost";
    private $port = 3306;
    private $dbname = "urPark";
    private $username = "root";
    private $password = "";


    //html variables to help when dynamically creating page
    private $button = "<button id=";

    private $lenY = 0;
    private $lenX = 0;

    /*
     * Function: Create the admin panel display
     */
    public function createPanel(){
        echo "<nav class='right'><ul>";
        echo "<li>Map Name<input type='text' id='mapname'></li>";
        echo "<li>"; //controls
        for($i = 0; $i < 4; $i++){ //creates arrow button
            echo $adminButton = $this->button."arrow".$i." class='arrow'>&#859".($i+2)."</button>".PHP_EOL;
        }
        $adminDrawLine = $this->button."draw>"."Click To Draw</button>".PHP_EOL;
        echo $adminDrawLine; //creates button for
        $adminSaveResults = $this->button."saveCoords>"."Click To Save</button>".PHP_EOL;
        echo $adminSaveResults;
        $adminYAdjust = "LenY:<input type='range' id='lenY' value='".$this->lenY."'>".PHP_EOL;
        $adminXAdjust = "LenX:<input type='range' id='lenX' value='".$this->lenX."'>".PHP_EOL;
        echo "<div class='range'>";
        echo $adminXAdjust.PHP_EOL;
        echo $adminYAdjust;
        echo "</div>".PHP_EOL;
        $adminRemoveLines = $this->button . 'clear>Clear Map of Drawn Lines</button>' . PHP_EOL;
        echo $adminRemoveLines;
        echo '</li><li><div id="print"></div></li>';
        echo '</ul></nav>';
    }
    /*
     *
     */
    public function getMaps()
    {

    }

    /*
     * Function: Set up access to Database and return the connection object to calling function
     */
    public function accessDB()
    {
        try {
            //creating connection
            $conn = new PDO("dblib:host=$this->hostname:
                $this->port;dbname=$this->dbname",
                "$this->username",
                "$this->password");//in form host:port;dbName,username,password
            echo "<script type='text/javascript'> console.log('database created')";//debug purposes
            return $conn;//only return if connection is possible
        } catch (PDOException $e) {
            echo "<script type='text/javascript'> console.log('Failed: $e->getMessage()')"; //error message
        }
    }

    public function saveDataToDB($type)
    {
        if ((isset($_POST['admin']) && !empty($_POST['mapName']))
            || (isset($_POST['dminmapName']) && !empty($_POST['adminMapName']))
        ) {
            $conn = $this->accessDB();//get connection set up
        }
    }
    public function getMapData()
    { //get data from client
        if (isset($_POST['Coordinates']) && !empty($_POST['Coordinates'])) {
            echo "<script type='text/javascript'> console.log('here') </script>";
            $json = array();
            $mapData = $_POST['Coordinates'];
            for ($i = 0; $i < $mapData . sizeof(); $i++) {
                $json[] = array(
                    'lat' => $mapData['lat'],
                    'lng' => $mapData['lng']
                );
            }

        }
    }

    /*
     * Function: Send data from database when request is done
     *
     */
    public function sendMapData()
    {
        //check if map selected is valid
        if (isset($_POST['dminmapName']) && !empty($_POST['adminMapName'])) {
            $conn = $this->accessDB();//get connection set up
        }
    }
}
$admin = new admin(); //create new object
$admin ->createPanel();
$admin->getMapData();
require_once ("adminheader.php");//required css for this page
include ("map.php"); //include map
