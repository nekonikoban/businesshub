<?php
$webAppUrl = "https://www.google.ba/";
$response = file_get_contents($webAppUrl);

if ($response !== false) {
    echo "Connection successful. Web app is accessible.";
} else {
    echo "Connection failed. Unable to retrieve content from the web app.";
}

?>