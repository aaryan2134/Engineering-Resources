<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Blood Donor</title>
    <style>
     .form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}
      </style>
</head>
<body>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="index.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img class="bi me-2" width="40" height="32" src="./Images/mainIcon.png">
            <span class="fs-4">Blood Donation</span>
          </a>
    
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Donate</a></li>
            <li class="nav-item"><a href="info.php" class="nav-link">Information</a></li>
          </ul>
        </header>
      </div>


      <div class="container text-center">
        <main class="form-signin w-100 m-auto">
            <form action="" method="POST">
              <img class="mb-4" src="./Images/indexRegIcon.png" alt="" width="85p" height="77">
              <h1 class="h3 mb-3 fw-normal">Register</h1>
          
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" name="name"
                placeholder="Name" required>
                <label for="floatingInput">Name</label>
              </div>

              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" name="region" placeholder="Region" required>
                <label for="floatingInput">Region</label>
              </div>

              <div class="form-floating mb-2">
                <input type="phone" class="form-control" id="floatingInput" name="phone" 
                placeholder="Phone Number" required>
                <label for="floatingInput">Phone Number</label>
              </div>
              <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" name="bloodGroup" 
                placeholder="bloodGroup" required>
                <label for="floatingInput">Blood Group</label>
              </div>

              <button class="w-100 btn btn-lg btn-primary" type="submit" name="submit">Submit</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2020–2024</p>
            </form>
          </main>
      </div>
</body>
</html>

<!-- PHP Script Begins Here -->
<?php
include 'config.php';
if(isset($_POST['submit']))
{
  $name=mysqli_real_escape_string($con,$_POST['name']);
  $region=mysqli_real_escape_string($con,$_POST['region']);
  $phone=mysqli_real_escape_string($con,$_POST['phone']);
  $bg=mysqli_real_escape_string($con,$_POST['bloodGroup']);
  $query="insert into donorData (name,region,phone,bloodGroup) values ('$name','$region','$phone','$bg')";
  if(mysqli_query($con,$query))
  {
    ?>
    <script>alert("Registered Successfully!");</script>
    <?php
  }
  else{
    ?>
    <script>alert("Something went wrong :|");</script>
    <?php
  }
}
mysqli_close($con);
?>