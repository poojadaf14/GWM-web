<?php
$searchQuery = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $searchQuery = $_POST['search'];
}
?>
