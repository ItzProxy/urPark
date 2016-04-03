<?php
/**
 * Created by PhpStorm.
 * User: Dionne
 * Date: 4/3/2016
 * Time: 10:03 AM
 */
require_once("adminPanel.php");
$admin = new admin();
$admin->accessDB();

if (isset($_POST['data']) && !empty($_POST['data']) && isset($_POST['mapID'])) {
    $admin->checkConnection(); //recheck connection is valid
    $newDB = $admin->getDB(); //set initial connections
    $mapID = $_POST['mapID'];
    $rowData = json_decode(stripcslashes($_POST['data']));
    $admin->checkConnection();
    $statement = $newDB->prepare("INSERT INTO `lot`(`m_id`, `lotName`, `lotGeo`) VALUES (:m_id,:lotName,:lotGeo)");
    $statement->bindParam(':m_id', $mapID, PDO::PARAM_INT);
    $statement->bindParam(':lotName', $rowData['properties']['lotName'], PDO::PARAM_STR);
    $statement->bindParam(':lotGeo', $_POST['data'], PDO::PARAM_STR);
    $check = $statement->execute();
    if ($check) {
        echo " <script type='text/javascript'>error('OK', 'Row Data saved')</script>";
    } else {
        echo " <script type='text/javascript'>error('BAD', 'Row Data did not saved')</script>";
    }
}
