<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_REQUEST['nombre']; 
    $email = $_REQUEST['email']; 
    $consulta = $_REQUEST['consulta'];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Mi nombre es: <?=$nombre ?></h2><br>
    <h2>Tu email es: <?=$email ?></h2><br>
    <h2>Tu consulta es: <?=$consulta ?></h2>         
</body>
</html>
