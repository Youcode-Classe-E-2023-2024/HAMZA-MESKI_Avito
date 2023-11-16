<?php
    $conn = new mysqli('localhost', 'root', '', 'avito_users');
    $sqlSelect = "SELECT * FROM `users`"; 
    $result = mysqli_query($conn, $sqlSelect);
    $column = mysqli_fetch_all($result);
    $json = json_encode($column);
    mysqli_close($conn);
    
    // that's php file simulate a JSON file format
    print_r($json);
?>