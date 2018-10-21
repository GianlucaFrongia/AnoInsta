<?php
include 'dbconnecter.php';

$title = $_POST["title"];
$uploaddir = '/Applications/MAMP/htdocs/anoinsta/images/www';
$uploaddir_resize = '/Applications/MAMP/htdocs/anoinsta/images/thumb';
$uploadfile = $uploaddir . basename($_FILES['file']['tmp_name']);

header('Content-type: image/jpeg');

// ensure we have SSL and MySQL support
if (!extension_loaded('imagick')) {
    echo 'imagick not installed';
}

try {

// Undefined | Multiple Files | $_FILES Corruption Attack
    // If this request falls under any of them, treat it invalid.
    if (
        !isset($_FILES['file']['error']) ||
        is_array($_FILES['file']['error'])
    ) {
        throw new RuntimeException('Invalid parameters.');
    }

// Check $_FILES['file']['error'] value.
    switch ($_FILES['file']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_NO_FILE:
            throw new RuntimeException('No file sent.');
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            throw new RuntimeException('Exceeded filesize limit.');
        default:
            throw new RuntimeException('Unknown errors.');
    }

// You should also check filesize here.
    if ($_FILES['file']['size'] > 1000000) {
        throw new RuntimeException('Exceeded filesize limit.');
    }

// DO NOT TRUST $_FILES['file']['mime'] VALUE !!
    // Check MIME Type by yourself.
    $allowed = array('png', 'jpg');
    $filename = $_FILES['file']['name'];
    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    if (!in_array($ext, $allowed)) {
        throw new RuntimeException('Falscher File Format');
    }

// You should name it uniquely.
    // DO NOT USE $_FILES['file']['name'] WITHOUT ANY VALIDATION !!
    // On this example, obtain safe unique name from its binary data.

    $thumb = new Imagick($_FILES['file']['tmp_name']);
    $thumb->thumbnailImage(500, 0);
    $thumb->writeImage($uploaddir_resize . "/thumb_" . $_FILES['file']['name']);

    $www = new Imagick($_FILES['file']['tmp_name']);
    $www->thumbnailImage(100, 0);
    $www->writeImage($uploaddir . "/web_" . $_FILES['file']['name']);

	 echo $www;
    echo 'File is uploaded successfully.';

    header("Location: /Anoinsta/dist/");
    die();

} catch (RuntimeException $e) {

    echo $e->getMessage();

}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['post']) && !empty(trim($_POST['post']))) {
        $post = $_POST['post'];
        echo $post;
    }
	 echo 'lol';
	 $user = $_POST["name"];
	 $desc = $_POST["title"];
	 echo $user;
	 echo $desc;
	

    $query = "INSERT INTO picture (user) VALUES (?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("isi", $user);
    $stmt->execute();
    $stmt->close();
} else {
    echo 'wrong';
}
