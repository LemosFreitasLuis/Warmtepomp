<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $voornaam = htmlspecialchars($_POST['voornaam']);
    $achternaam = htmlspecialchars($_POST['achternaam']);
    $email = htmlspecialchars($_POST['email']);
    
    // Display the form data on the page
    echo "<h1>Form Submission Details</h1>";
    echo "<p><strong>Voornaam:</strong> $voornaam</p>";
    echo "<p><strong>Achternaam:</strong> $achternaam</p>";
    echo "<p><strong>Email:</strong> $email</p>";
} else {
    echo "No data received.";
}
?>