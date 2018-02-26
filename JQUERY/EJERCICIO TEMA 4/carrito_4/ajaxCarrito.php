<?php
	session_start();

	if (isset($_GET['operacion']))
	{
		require_once('sesArticulos.inc');
		
		if ($_GET['operacion'] === "obtenerItems")
			header("Content-type: text/xml");
		else
			header('Content-type: application/json');
		
		switch($_GET['operacion'])
		{
			case "nuevo":
				if (isset($_GET['idArticulo']))
					echo nuevoArticulo($_GET['idArticulo']);
				else
					echo json_encode(false);
				break;
				
			case "elimina":
				if (isset($_GET['idArticulo']))
					echo eliminaArticulo($_GET['idArticulo']);
				else
					echo json_encode(false);
				break;
				
			case "decrementa":
				if (isset($_GET['idArticulo']))
					echo decrementaArticulo($_GET['idArticulo']);
				else
					echo json_encode(false);
				break;
				
			case "obtenerComprados":
				echo obtenerComprados();
				break;

			case "obtenerItems":
				require_once('DBArticulos.inc');
				$dbarticulos = new DBArticulos();
				echo $dbarticulos->dameXMLArticulos();
				break;

			case "comprar":
				echo comprar();
				break;
				
			default:
				echo json_encode(false);
				break;
		}
	}
	else
	{
		header('Content-type: application/json');
		echo json_encode(false);
	}
?>
