<?php
$host = 'localhost';
$username = 'root';
$password = 'root';
$database = 'Anoinsta';

$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
 die('Connect Error (' . $mysqli->connect_errno . ') '. $mysqli->connect_error);
}
?>
