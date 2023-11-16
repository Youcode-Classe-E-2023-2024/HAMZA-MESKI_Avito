<?php 
    require_once('DBconnection.php');
    
    // checking if the email aready exists on the database or not:
    for ($i = 0; $i < count($data); $i++) {
        if ($data[$i][1] == trim($_POST['email2']) && $data[$i][2] == $_POST['password2']) {
            exit('Successfull');
        }
    }

    mysqli_close($conn);
?>