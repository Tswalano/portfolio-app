<?php
include_once("./Config/config.php");

$sql = "SELECT * FROM users";
if ($result = $conn->query($sql)) {
    //Set the Content-Type header to application/json.
    $rows = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        $user = array("success" => true, "count" => mysqli_num_rows($result), "user" => $rows);
        echo (json_encode($user));
    } else {
        $error = array("success" => false, "message" => "User is not in the system", "status" => 403);
        echo (json_encode($error));
    }
} else {
    $msg = array("success" => false, "message" => "You are not atuthorized", "status" => 403);
    echo (json_encode($msg));
}
$conn->close();
