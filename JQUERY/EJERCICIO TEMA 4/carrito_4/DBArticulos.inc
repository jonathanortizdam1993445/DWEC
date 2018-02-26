<?php
    require_once('Database.inc');
    
    class DBArticulos extends Database
    {
		private function generaXMLcampoArticulo($dom, $item, $nombreCampo, $valorCampo)
		{
			$campo = $item->appendChild($dom->createElement($nombreCampo));
			$campo->appendChild($dom->createTextNode($valorCampo));
		}
		
		public function dameXMLArticulos() 
		{
            $consulta = 'select * from articulos';
            
            $resultado = $this->ejecuta_query($consulta);
			
			// creamos el documento XML	
			$dom = new DOMDocument('1.0', 'UTF-8');
			$doc = $dom->appendChild($dom->createElement("items"));
			
			// recorremos el resultado
            while ($articulo = $resultado->fetch_object())
			{
				// creamos el item
				$item = $doc->appendChild($dom->createElement("item"));
				
				$this->generaXMLcampoArticulo($dom, $item, "id", $articulo->id);
				$this->generaXMLcampoArticulo($dom, $item, "imagen", $articulo->imagen);
				$this->generaXMLcampoArticulo($dom, $item, "nombre", $articulo->nombre);
				$this->generaXMLcampoArticulo($dom, $item, "precio", $articulo->precio);
				$this->generaXMLcampoArticulo($dom, $item, "stock", $articulo->stock);
			}
			
			// retornamos el archivo XML como cadena de texto
			$dom->formatOutput = true; 
			return $dom->saveXML();    
		}	
		
		public function actualizaStockArticulo($idArticulo, $cantidad)
		{
            $consulta = "update articulos set stock=stock-$cantidad where id='$idArticulo'";
            
            return $this->ejecuta_query($consulta);
		}
	}
?>
