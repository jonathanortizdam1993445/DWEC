<?php
    class Database
    {
        private $conexion;

        public function __construct()
        {
            require_once('configuracion.inc');
            @$this->conexion = new mysqli($servidor, $usuario, $password);
            if (mysqli_connect_errno() != 0)
            {
                echo 'Error conectando con el servidor de base de datos en '.$servidor.' :'.mysqli_connect_error();
                
                exit();
            }

            $this->conexion->select_db($database);
            if (mysqli_errno($this->conexion) != 0)
            {
                echo 'Error seleccionando la BD ', $database.' :'.mysqli_error($this->conexion);

                exit();
            }
        }

        protected function ejecuta_query($query)
        {
            if (($resultado = $this->conexion->query($query)) === false)
            {
                echo 'Error ejecutando consulta a la BD ', $database.' :'.mysqli_error($this->conexion);

                exit();
            }

            return $resultado;
        }

		public function __destruct()
        {
            $this->conexion->close();
			$this->conexion = null;
        }
    }
?>
