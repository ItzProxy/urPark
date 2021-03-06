<?php

/**
 * Created by PhpStorm.
 * User: Dionne
 * Date: 3/25/2016
 * Time: 1:55 PM
 */
class admin
{
    private $db; //server connection
    //server variables
    private $hostname = "localhost";
    private $dbname = "urPark";
    private $username = "root";
    private $password = "";


    //html variables to help when dynamically creating page
    private $button = "<button id=";

    //initial values for range
    private $lenY = 0;
    private $lenX = 0;

    public function getDB()
    {
        return $this->db;
    }

    public function addGoogleSignInScritpt()
    {
        echo "<meta name='google-signin-scope' content='profile email'>
              <meta name='google-signin-client_id' content='364666475366-fibcggvbkf1nlfns3pvehhbthlad6rpu.apps.googleusercontent.com'>
              <script src='https://apis.google.com/js/platform.js' async defer></script>";
    }

    public function createLogin()
    {
        echo "<div class='g-signin2' data-onsuccess='onSignIn' data-theme='dark'></div>
                    <script>
                      function onSignIn(googleUser) {
                          // Useful data for your client-side scripts:
                          var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
    
            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log('ID Token: ' + id_token);
        }
    </script>";
    }

    /*
     * Function: Create the admin panel display
     */
    public function createPanel()
    {
        echo "<div class='right'><ul>";
        echo "<li><div id='error'></div></li>";
        /*
        echo "<li>";
        $this->createLogin();
        echo "</li>";
        */
        echo "<li class = 'inline-form'>";
        echo "<p id='currentMap'></p>";
        $this->getMaps();
        echo "</li>";
        echo "<li>"; //create new map
        $createMap = "<input id='createNewMap' placeholder='Ex. University Of Regina'>";
        echo $createMap;
        $createMapButton = $this->button . "createMap>Create New Map";
        echo $createMapButton;
        echo "</li>";
        echo "<li>"; //controls
        $adminOpenLotTool = $this->button . "openLotDraw>Open Lot Tool</button>" . PHP_EOL;
        echo $adminOpenLotTool;
        echo "<br />";
        echo "";
        $adminLotName = "<input id='lotName' placeholder='LotName ex: lot15'>";
        $adminLotSave = $this->button . "saveLot>Save Lot Drawn</button>" . PHP_EOL;
        echo $adminLotName;
        echo $adminLotSave;
        $adminOpenRowTools = $this->button . "openRowTools>Open Row Tools</button>" . PHP_EOL;
        echo $adminOpenRowTools;
        echo "</li><li role='rowtools' hidden='hidden'>";
        for ($i = 0; $i < 4; $i++) { //creates arrow button
            echo $adminButton = $this->button . "arrow" . $i . " class='arrow'>&#859" . ($i + 2) . "</button>" . PHP_EOL; //prints arrow
        }
        $adminDrawLine = $this->button . "draw>" . "Click To Draw Row</button>" . PHP_EOL; //
        echo $adminDrawLine;
        $adminSaveRows = $this->button . "saveCoords>Click To Save Rows</button>" . PHP_EOL;
        echo $adminSaveRows;
        $adminYAdjust = "LenY:<input type='range' id='lenY' value='" . $this->lenY . "'>" . PHP_EOL;
        $adminXAdjust = "LenX:<input type='range' id='lenX' value='" . $this->lenX . "'>" . PHP_EOL;
        echo "<div class='range'>";
        echo $adminXAdjust . PHP_EOL;
        echo $adminYAdjust;
        echo "</div>" . PHP_EOL;
        $adminRemoveLines = $this->button . 'clear>Clear Map of Drawn Lines</button>' . PHP_EOL;
        echo $adminRemoveLines;
        echo '</li><li><div id="print"></div></li>';
        echo '</ul></div>';
        //$this->accessDB();
    }

    /*
     *
     */
    public function getMaps()
    {
        $h = 1;
        $this->checkConnection();
        $statement = $this->db->prepare("SELECT * FROM `map` WHERE :search");
        $statement->bindParam(':search', $h, PDO::PARAM_INT);
        $statement->execute();
        $html = "<div class='dropdown'>
                  <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>MAPS
                  <span class='caret'></span></button>
                  <ul class='dropdown-menu' id='getMap'>";
        while ($result = $statement->fetch(PDO::FETCH_ASSOC)) {
            $html = $html . "<li id='mapID" . $result['m_id'] . "'><a href='#'>" . $result['mapName'] . "</a></li>" . PHP_EOL;
        }
        $html = $html . "</ul>" . PHP_EOL . "</div>" . PHP_EOL;

        echo $html;

    }

    /*
     * Function: Set up access to Database and return the connection object to calling function
     */
    public function accessDB()
    {
        try {
            $this->db = new PDO("mysql:host=$this->hostname;
                            dbname=$this->dbname",
                $this->username,
                $this->password);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        } catch (PDOException $ex) {
            die(json_encode(array('outcome' => false, 'message' => 'Unable to connect')));
        }
    }

    public function saveDataToDB($type)
    {
        if ((isset($_POST['admin']) && !empty($_POST['mapName']))
            || (isset($_POST['dminmapName']) && !empty($_POST['adminMapName']))
        ) {
            $conn = $this->db;

        }
    }

    public function getLogin()
    {
        if (isset($_POST['B']) && !empty($_POST['B']) && !empty($_POST['G'])) {
            include_once 'db.php';

            $id = clean_post($_POST['B']); //Google ID
            $email = clean_post($_POST['G']); //Email ID
            $name = clean_post($_POST['ha']); //Name

            //check if Google ID already exits
            $stmt = $db->prepare("SELECT * FROM tbl_users WHERE fld_google_id=:id");
            $stmt->execute(array(':id' => $id));
            $check_user = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!$check_user) {
                //new user - we need to insert a record
                $time = time();
                $insert_user_query = $db->prepare("INSERT INTO tbl_users(fld_user_name,fld_user_email,fld_google_id,fld_user_doj) VALUES(:name,:email,:google_id,:doj)");
                $insert_user_query->execute(array(':name' => $name, ':email' => $email, ':google_id' => $id, ':doj' => $time));

                echo json_encode($_POST);
            } else {
                //update the user details
                $update_user_query = $db->prepare("UPDATE tbl_users SET fld_user_name=?, fld_user_email=? WHERE fld_google_id=?");
                $update_user_query->execute(array($name, $email, $id));

                echo json_encode($_POST);
            }
        } else {
            $arr = array('error' => 1);
            echo json_encode($arr);
        }
    }

    public function checkConnection()
    {
        try {
            $this->db->query('SELECT 1');
        } catch (PDOException $ex) {
            $this->accessDB(); //reinitiate connection
        }
    }
}