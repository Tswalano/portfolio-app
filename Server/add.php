<?php


include_once("./Config/config.php");
$_POST = json_decode(array_keys($_POST)[0], true);
$randomNumber = rand(15, 35);

$sql = "INSERT INTO users (name, surname, username, password, email, number)
VALUES ('" . $_POST['firstName'] . "', '" . $_POST['lastName'] . "','@" . $_POST['firstName'] . "_$randomNumber','password','" . $_POST['emaiAddress'] . "','" . $_POST['phoneNumber'] . "');";

if ($conn->query($sql) === TRUE) {
    $msg = array("success" => true, "message" => "New record created successfully", "status" => 200);
    echo json_encode($msg);
} else {
    $msg = array("success" => false, "message" => $conn->error, "status" => 403);
    echo json_encode($msg);
}
