<?php
require("php/adminPanel.php");
require("adminheader.php");
$admin = new admin(); //create new object
$admin->addGoogleSignInScritpt();
$admin->accessDB();
$admin->createPanel();
require("adminMapAccess.php"); //include map

