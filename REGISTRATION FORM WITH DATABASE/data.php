<?php

// database connection code
$con = mysqli_connect('localhost', 'root', '', 'form');

// Check connection
if (!$con) {
  die("Connection failed: " .mysqli_connect_error());
}

// saved customer data
if(isset($_POST['submit'])){
    $Name = $_POST['name'];
    $Course = $_POST['course'];
    $Branch = $_POST['branch'];
    $Address = $_POST['address'];
    $Email = $_POST['email'];
    $Phone = $_POST['phone'];
}

$insert = "INSERT INTO stud_data(Name, Course, Branch, Address, Email, Phone) 
values('$Name' , '$Course' , '$Branch' , '$Address' , '$Email' , '$Phone')";

if ($con->query($insert) != TRUE){
  ?>
<script>
    alert("Response Submitted successfully");
    window.location.href = "./index.html";
</script>
<?php
  } else {
    echo '<script> alert("Error during submission of Responses.");</script>';
    echo '<script> window.location.href = "./index.html";</script>';
  }

$con->close();
?>