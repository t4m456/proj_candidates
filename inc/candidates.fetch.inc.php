<?php

include_once 'db.conn.inc.php';

$myArr = array();
//connection test

if (mysqli_connect_errno()) {

    echo mysqli_connect_errno();

    die();
};


$sql = "SELECT * FROM candidates";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if ($resultCheck > 0) {


    while ($row = mysqli_fetch_assoc($result)) {

        $myCol1 = $row['id'];
        $myCol2 = $row['name'];
        $myCol3 = $row['email'];
        $myCol4 = $row['tel'];
        $myCol5 = $row['skills'];
        $myCol6 = $row['status'];

        array_push($myArr, (object)[
            'id' => $myCol1,
            'name' => $myCol2,
            'email' => $myCol3,
            'tel' => $myCol4,
            'skills' => $myCol5,
            'status' => $myCol6,
        ]);
    }


    echo json_encode($myArr);
} else {

    echo "no Data";
}
