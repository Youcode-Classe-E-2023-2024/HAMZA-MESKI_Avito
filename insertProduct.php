<?php 
    // Connecting to database:
    // create product DB with products table if they are not exist
    include('createProductDB.php');

    $conn = new mysqli('localhost', 'root', '', 'products_db');
    $sqlSelect = "SELECT * FROM `users`"; 

    if (empty($_POST['product_name'])) {
        echo 'product_name is empty<br>';
    }
    if (empty($_POST['product_price'])) {
        echo 'product_price is empty<br>';
    }

    $sqlInsertData = "INSERT INTO `products` (`user_id`, `product_name`, `product_price`) VALUES
    ('{$_POST['email1']}', '{$_POST['password1']}')";
    mysqli_query($conn, $sqlInsertData);


    // $result = mysqli_query($conn, $sqlSelect);
    // $data = mysqli_fetch_all($result);
?>