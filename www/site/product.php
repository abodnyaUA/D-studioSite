<?php
class Product 
{
	function JSONWithParameters($product_id)
	{
		$description_path = "site/".$product_id.".txt";
		$poster_path = "site/".$product_id.".png";
		$screenshots = array_fill(0,3,'not found');
		for ($i=0; $i < count($screenshots); $i++) 
		{ 
			$screenshots[$i] = 'site/'.$product_id.'-screen_'.($i+1).'.png';
		}
		echo '{"description_path":"'.$description_path.'", '.
			 ' "poster_path":"'.$poster_path.'", '.
			 ' "screenshots": [';
		for ($i=0; $i < count($screenshots) -1; $i++) 
		{
		   	echo '"'.$screenshots[$i].'", ';
		}   
		echo '"'.end($screenshots).'"]';
		echo '}';
	}
}
?>