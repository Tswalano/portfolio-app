<?php

// Allow CORS
include_once('header.php');
// Safely get the value of an environment variable, ignoring whether 
// or not it was set by a SAPI or has been changed with putenv

// DB Configurations
if ($_SERVER["REMOTE_ADDR"] == "127.0.0.1" || "::1") {
    // Local Enviroment
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "moganegb";
    $local = True;
} else {
    // Prod. Enviroment
    $servername = "	164.160.91.39";
    $username = "moganegb_root";
    $password = "mogane@42";
    $dbname = "moganegb_system";
    $local = False;
}


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
