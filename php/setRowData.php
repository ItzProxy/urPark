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

if (isset($_POST['rowData']) && !empty($_POST['rowData'])) {
    $admin->checkConnection(); //recheck connection is valid
    $newDB = $admin->getDB(); //set initial connections
    $rowData = json_decode(stripcslashes($_POST['rowData']));
    foreach ($rowData as $d) {
        echo "<script type='text/javascript'>console.log(" . $d . ")</script>";
    }
    while ($result = $statement->fetch(PDO::FETCH_ASSOC)) {
        $rls = array('l_id' => $result['l_id'],
            'lotName' => $result['lotName'],
            'lotGeo' => $result['lotGeo']);
        echo json_encode($rls);
    }

}