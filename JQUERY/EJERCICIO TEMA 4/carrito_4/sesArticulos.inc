<?php
	function nuevoArticulo($idArticulo)
	{
		if (isset($_SESSION['articulos_carrito'][$idArticulo]))
			$_SESSION['articulos_carrito'][$idArticulo] += 1;
		else
			$_SESSION['articulos_carrito'][$idArticulo] = 1;
		
		return json_encode(true);
	}
	
	function eliminaArticulo($idArticulo)
	{
		if (isset($_SESSION['articulos_carrito'][$idArticulo]))
			$_SESSION['articulos_carrito'][$idArticulo] = null;

		return json_encode(true);
	}
	
	function decrementaArticulo($idArticulo)
	{
		if (isset($_SESSION['articulos_carrito'][$idArticulo]))
			$_SESSION['articulos_carrito'][$idArticulo] -= 1;
			
		return json_encode(true);
	}
			
	function obtenerComprados()
	{
		if (isset($_SESSION['articulos_carrito']) && count($_SESSION['articulos_carrito']) > 0)
			return json_encode($_SESSION['articulos_carrito']);
		else
			return json_encode(null);
	}		
	
	function comprar()
	{
		if (isset($_SESSION['articulos_carrito']) && count($_SESSION['articulos_carrito']) > 0)
		{
			require_once('DBArticulos.inc');
			$dbarticulos = new DBArticulos();

			foreach($_SESSION['articulos_carrito'] as $idArticulo=>$cantidad)
			{
				if (isset($_SESSION['articulos_carrito'][$idArticulo]))
				{
					if ($dbarticulos->actualizaStockArticulo($idArticulo, $cantidad) == true)
						$_SESSION['articulos_carrito'][$idArticulo] = null;
				}
			}
		}
		
		return json_encode(true);
	}
?>
