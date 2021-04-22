  <?php

    include_once 'db.conn.inc.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $idToModifyStatus =  test_input($_POST['id']);
        $statusModify =  test_input($_POST['status']);

        $sqlModify = "UPDATE candidates SET status=? WHERE id=?;";


        $stmtForModify = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmtForModify, $sqlModify)) {

            echo "SQL_hiba";
        } else {
            mysqli_stmt_bind_param($stmtForModify, "si", $statusModify, $idToModifyStatus);
            mysqli_stmt_execute($stmtForModify);

            header("Location: ../adatlap.php");
        };
    } else {
        echo "No data posted with HTTP POST.";
    }

    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
