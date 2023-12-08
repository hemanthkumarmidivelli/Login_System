<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','register');

// get the post records

$email = $_POST['email'];
$phonenumber = $_POST['phonenumber'];
$password = $_POST['password'];
$username = $_POST['username'];
// database insert SQL code
$sql = "INSERT INTO `details` (username,email, phonenumber, password) VALUES ( '$username','$email', '$phonenumber', '$password')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	
	//echo "<button><a href='../profile.html'>Contact</a></button>";
	require "../profile.html";
}

?>