<?php
require_once('../../CLASSES/ClassParent.php');

class inventory extends ClassParent{

public function save($extra){
		$id = $extra['id'];
		$price = $extra['price'];
		$name = $extra['name'];
		$quantity = $extra['quantity'];
		$expiration = $extra['expiration'];

				$sql = <<<EOT
			insert into inventory
				(
					id,
					product_name,
					quantity,
					price,
					expiration

				)
				values
				(	
					'$id',
					'$name',
					'$quantity',
					'$price',
					'$expiration'
					
				);
EOT;
			return ClassParent::insert($sql);
	
		}	
public function get_inventory(){
	$sql = <<<EOT
			select
			*
			from inventory
			;
EOT;
			 return ClassParent::get($sql);
	
		}

}

?>
