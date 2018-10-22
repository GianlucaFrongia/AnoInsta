<?php
require 'dbconnecter.php';
$uploaddir = '/Applications/MAMP/htdocs/anoinsta/images/www';
$uploaddir_resize = '/Applications/MAMP/htdocs/anoinsta/images/thumb';
$uploadfile = $uploaddir . basename($_FILES['file']['tmp_name']);

// Überprüfen ob imagick installiert ist
if (!extension_loaded('imagick')) {
    echo 'imagick not installed';
}

// Überprüfen des Uploads
try {

    // Undefined | Multiple Files | $_FILES Corruption Attack
    // Überprüft ob die Datei ein Fehler enthält
    if (
        !isset($_FILES['file']['error']) ||
        is_array($_FILES['file']['error'])
    ) {
        throw new RuntimeException('Invalide Parameter. Bitte neues Bild hochladen');
    }

    // Überprüfen des $_FILES['file']['error'] value.
    switch ($_FILES['file']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_NO_FILE:
            throw new RuntimeException('Kein Bildfile vorhanden');
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            throw new RuntimeException('Bildgrösse ist zu gross');
        default:
            throw new RuntimeException('Fehler');
    }

    // Filegrösse überprüfen
    if ($_FILES['file']['size'] > 1000000) {
        throw new RuntimeException('Bildgrösse ist zu gross.');
    }

    // Überprüfen des Bildformats
    $allowed = array('png', 'jpg');
    $filename = $_FILES['file']['name'];
    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    if (!in_array($ext, $allowed)) {
        throw new RuntimeException('Falscher File Format');
    }


    // Komprieren der Bilder
    $thumb = new Imagick($_FILES['file']['tmp_name']);
    $thumb->thumbnailImage(500, 500);
    $thumb_pfad = $uploaddir_resize . "/thumb_" . $_FILES['file']['name'];
    $thumb->writeImage($thumb_pfad);

    // Komprieren der Bilder
    $www = new Imagick($_FILES['file']['tmp_name']);
    $www->thumbnailImage(900, 900);
    $www_pfad = $uploaddir . "/web_" . $_FILES['file']['name'];
    $www->writeImage($www_pfad);

    echo 'File is uploaded successfully.';
    
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        if (isset($_POST['post']) && !empty(trim($_POST['post']))) {
            $post = $_POST['post'];
            echo $post;
        }
         $user = trim($_POST["name"]);
         $title = trim($_POST["title"]);	
    
        if (isset($_POST)) {
    
            $query = "INSERT INTO picture (user,title, www, thumb) VALUES (?,?,?,?)";
            $stmt = $mysqli->prepare($query);
            $stmt->bind_param("ssss", $user,$title, $www_pfad, $thumb_pfad);
            $stmt->execute();
            $stmt->close();
        } else {
         echo 'wrong';
        }
    }
    
    // Zurück zur Hauptseite
    header("Location: /Anoinsta/dist/");
    die();

} catch (RuntimeException $e) {

    echo $e->getMessage();

}

