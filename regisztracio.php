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

    <title>Regisztráció</title>
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
            <h1 id="title" class="text-center">Jelentkezési lap</h1>
            <p id="description" class="description text-center">
                Kérem adja meg a jelentkező adatait
            </p>
        </header>
        <form action="inc/reg.send.inc.php" method="POST" id="survey-form">
            <div class="form-group">
                <label id="name-label" for="name">Név*</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Adja meg a nevét" required />
            </div>
            <div class="form-group">
                <label id="email-label" for="email">Email*</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Adja meg az e-mail címét" required />
            </div>
            <div class="form-group">
                <label id="number-label" for="number">Telefon<span class="clue"></span></label>
                <input type="tel" name="tel" id="number" class="form-control" placeholder="Adja meg a telefonszámát" required />
            </div>


            <div class="form-group">
                <p>
                    Kompetenciák és jellemzők
                    <span class="clue">(Több is megjelölhető)</span>
                </p>

                <label><input name="skill1" value="Angol nyelvtudás, " type="checkbox" class="input-checkbox" />Angol nyelvtudás</label>
                <label>
                    <input name="skill2" value="Német nyelvtudás, " type="checkbox" class="input-checkbox" />Német nyelvtudás</label>
                <label><input name="skill3" value="Csapatjátékos, " type="checkbox" class="input-checkbox" />Csapatjátékos</label>
                <label><input name="skill4" value="Önálló munkavégzés, " type="checkbox" class="input-checkbox" />Önálló munkavégzés</label>
                <label><input name="skill5" value="Barátságos jellem, " type="checkbox" class="input-checkbox" />Barátságos jellem</label>
                <label><input name="skill6" value="Proaktív hozzáállás, " type="checkbox" class="input-checkbox" />Proaktív hozzáállás</label>
                <label><input name="skill7" value="JavaScript, " type="checkbox" class="input-checkbox" />JavaScript</label>
                <label><input name="skill8" value="PHP, " type="checkbox" class="input-checkbox" />PHP</label>
                <label><input name="skill9" value="React JS, " type="checkbox" class="input-checkbox" />React JS</label>
                <label><input name="skill10" value="Node JS, " type="checkbox" class="input-checkbox" />Node JS</label>
                <label><input name="skill11" value="Angular, " type="checkbox" class="input-checkbox" />Angular</label>
            </div>


            <div class="form-group">
                <button type="submit" id="submit" class="submit-button">
                    BEKÜLDÉS
                </button> <br>
                <a class="buttonlike-link2" href="regisztracio.php">Ürlap törlés</a>

            </div>
        </form>

    </div>

    <script src="hamburger.js"></script>
    <script src="modal.js"></script>
</body>


</html>