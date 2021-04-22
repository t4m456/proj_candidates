<?php

$personSkills = "";

include_once 'db.conn.inc.php';

$personName = mysqli_real_escape_string($conn, $_POST['name']);
$personEmail = mysqli_real_escape_string($conn, $_POST['email']);
$personPhone = mysqli_real_escape_string($conn, $_POST['tel']);

$personSkill1 = mysqli_real_escape_string($conn, $_POST['skill1']);
$personSkill2 = mysqli_real_escape_string($conn, $_POST['skill2']);
$personSkill3 = mysqli_real_escape_string($conn, $_POST['skill3']);
$personSkill4 = mysqli_real_escape_string($conn, $_POST['skill4']);
$personSkill5 = mysqli_real_escape_string($conn, $_POST['skill5']);
$personSkill6 = mysqli_real_escape_string($conn, $_POST['skill6']);
$personSkill7 = mysqli_real_escape_string($conn, $_POST['skill7']);
$personSkill8 = mysqli_real_escape_string($conn, $_POST['skill8']);
$personSkill9 = mysqli_real_escape_string($conn, $_POST['skill9']);
$personSkill10 = mysqli_real_escape_string($conn, $_POST['skill10']);
$personSkill11 = mysqli_real_escape_string($conn, $_POST['skill11']);

if (!empty($personSkill1)) {
    $personSkills .= $personSkill1;
};
if (!empty($personSkill2)) {
    $personSkills .= $personSkill2;
};
if (!empty($personSkill3)) {
    $personSkills .= $personSkill3;
};
if (!empty($personSkill4)) {
    $personSkills .= $personSkill4;
};
if (!empty($personSkill5)) {
    $personSkills .= $personSkill5;
};
if (!empty($personSkill6)) {
    $personSkills .= $personSkill6;
};
if (!empty($personSkill7)) {
    $personSkills .= $personSkill7;
};
if (!empty($personSkill8)) {
    $personSkills .= $personSkill8;
};
if (!empty($personSkill9)) {
    $personSkills .= $personSkill9;
};
if (!empty($personSkill10)) {
    $personSkills .= $personSkill10;
};
if (!empty($personSkill11)) {
    $personSkills .= $personSkill11;
};



/*
This will be set on different page
$personStatus = mysqli_real_escape_string($conn, $_POST['status']);*/


$sqlInsert = "INSERT INTO candidates(name, email, tel, skills)
VALUES (?,?,?,?);";
//mysqli_query($conn, $sqlInsert);
$stmt = mysqli_stmt_init($conn);
if (!mysqli_stmt_prepare($stmt, $sqlInsert)) {

    echo "SQL_hiba";
} else {
    mysqli_stmt_bind_param($stmt, "ssss", $personName, $personEmail, $personPhone, $personSkills);
    mysqli_stmt_execute($stmt);

    header("Location: ../sikeres_regisztracio.php");
};
