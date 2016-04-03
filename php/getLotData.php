<?php
/**
 * Created by PhpStorm.
 * User: Dionne
 * Date: 4/3/2016
 * Time: 2:01 AM
 */
require_once("adminPanel.php");
$admin = new admin();
$admin->accessDB();

if (isset($_GET['mapID']) && !empty($_GET['mapID'])) {
    $admin->checkConnection(); //recheck connection is valid
    $newDB = $admin->getDB(); //set initial connections
    $mapID = $_GET['mapID'];
    $statement = $newDB->prepare("SELECT * from lot where m_id=:mapID");
    $statement->bindParam(':mapID', $mapID, PDO::PARAM_INT);
    $statement->execute();
    while ($result = $statement->fetch(PDO::FETCH_ASSOC)) {
        $rls = array('l_id' => $result['l_id'],
            'lotName' => $result['lotName'],
            'lotGeo' => $result['lotGeo']);
        echo json_encode($rls);
    }
}
