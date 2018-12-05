<?php
   include 'database.php'; //Link to database file.

   if(isset($_GET['animalID'])){
      $id = $_GET['animalID'];  // ID pulled through ajax
      echo "cat" . $id;
    }
   else
      $id = mysqli_real_escape_string($conn, $_POST['animalID']);

   //Query Animal
   $sqlQuery = "SELECT * FROM animals WHERE ID = '$id'";
   $result = $conn->query($sqlQuery);
   $numrows = $result->num_rows;

   //Test for a number with no result.
   if($numrows == 0){  //If invalid, let the javascript function know it failed
     echo "invalidEntry";
     exit();
   }else{   //Else send query as a json object
     $row = mysqli_fetch_assoc($result);
     echo json_encode($row);
   }

?>
