<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./fontawesome-free-5.13.0-web/css/all.css">
    <link rel="stylesheet" href="styles.css">
    <link href='https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


    <title>Adatlap</title>
</head>
<!--NAVIGATION-->

<span class="nav-icon">MENU

</span>
<!-- Hamburger menu-->
<div class="hamburger-overlay">

    <div class="hamburger-menu">
        <span class="close-hamburger">
            <i class="fas fa-window-close"></i>
        </span>
        <div class="hamburger-titles">
            <h2><a href="regisztracio.php">Regisztráció</a></h2>
            <h2><a href="kilistaz.php">Kilistázás</a></h2>
            <h2><a class="list-out-liked">Kedvencek</a></h2>

            <div class="liked-box">

            </div>
        </div>
    </div>
</div>
<!-- end of Hamburger menu-->
<!--NAVIGATION end-->

<body>


    <div class="container">
        <header class="header">
            <h1 id="title" class="text-center">Adatlap </h1>
            <div class="data-box">
                <!--    
                <p>Név:</p>
                <p>E-mial:</p>
                <p>Telefon:</p>
                <p>Kompetenciák:</p>
                <p>Állapot:</p>
-->
            </div>
            <p><i class="fa fa-thumbs-up" aria-hidden="true"></i></p>


            <div class="button-grid">
                <button id="rejected" class="filter-button rejected">ELUTASÍTVA</button>
                <button id="paused" class="filter-button paused">SZÜNETELTETVE</button>
                <button id="interviewed" class="filter-button interviewed">INTERJÚZTATVA</button>


            </div>



        </header>


    </div>


    <script src="adatlap.js"></script>
    <script src="hamburger.js"></script>
    <script src="modal.js"></script>

</body>

</html>