<?php
	if (!empty($_GET["product"]))
	{
		include("product.php");
		$product = new Product;
		$product->JSONWithParameters($_GET["product"]);
	}
	else
	{
		echo "Some problems. Please try again";
	}
?>