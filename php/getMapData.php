<?php
/**
 * Created by PhpStorm.
 * User: Dionne
 * Date: 4/3/2016
 * Time: 10:57 AM
 */

require_once("adminPanel.php");
$admin = new admin();
$admin->accessDB();

if (isset($_GET['currMapName']) && !empty($_GET['currMapName'])) {
    $admin->checkConnection(); //recheck connection is valid
    $mapName = stripcslashes($_GET['currMapName']);
    $newDB = $admin->getDB();
    $statement = $newDB->prepare("SELECT * from map where mapName=:mapName");
    $statement->bindParam(':mapName', $mapName, PDO::PARAM_STR);
    $statement->execute();
    while ($result = $statement->fetch(PDO::FETCH_ASSOC)) {
        $rls = array('m_id' => $result['m_id'],
            'northLat' => $result['northEastBoundLat'],
            'northLng' => $result['northEastBoundLong'],
            'southLat' => $result['southWestBoundLat'],
            'southLng' => $result['southWestBoundLong']);
        echo json_encode($rls);
    }
}
