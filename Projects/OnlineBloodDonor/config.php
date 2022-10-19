<?php
$server='localhost';
$username='root';
$password='';
$con=mysqli_connect($server,$username,$password);
if (!$con)
{
    die("Connection failed: ".mysqli_connect_error());
}
//Creating database
$query="create database if not exists donor;";
if(mysqli_query($con,$query)){
    ?>
    <!-- <script>alert("Connection Successful");</script> -->
   <?php
   $query="use donor";
   mysqli_query($con,$query);
   $query="show tables like 'donorData' ";
   $query=mysqli_query($con,$query);
   if(mysqli_num_rows($query)==0){
   $query="
   Create table donorData(
    id INT(6) auto_increment primary key,
    name varchar(255),
    region varchar(255),
    phone varchar(10),
    bloodGroup varchar(5),
    reg_date datetime default current_timestamp
    )
   ";
   if(mysqli_query($con,$query)){
    ?>
     <script>alert("Table Created Successfully");</script>
     <?php
   }
   else{
    ?>
     <script>alert("Table NOT Created");</script>
   <?php
   }
   }
}
else{
    ?>
    <script>alert("Connection Failed");</script>
   <?php
}

?>