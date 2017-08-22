<?php
require_once('../connect.php');
require_once('../../CLASSES/inventory.php');

$class = new inventory(
						$_POST['id'],
						$_POST['price'],
						$_POST['name'],
						$_POST['quantity'],
						$_POST['expiration']
	);
$extra['id'] = $_POST['id'];
$extra['name'] = $_POST['name'];
$extra['price'] = $_POST['price'];
$extra['quantity'] = $_POST['quantity'];
$extra['expiration'] = $_POST['expiration'];


$data = $class->save($extra);

header("HTTP/1.0 500 internal error");
if($data['status']){
	header("HTTP/1.0 200 OK");
}
header("Content-Type: application/json");
print(json_encode($data));
?>