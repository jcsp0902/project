<?php
require_once('../connect.php');
require_once('../../CLASSES/inventory.php');


$class = new inventory(
	);
$data = $class->get_inventory($extra);

header("HTTP/1.0 500 internal error");
if($data['status']){
	header("HTTP/1.0 200 OK");
}
header("Content-Type: application/json");
print(json_encode($data));
?>