# AnoInsta

## Vorraussetzung
- Imagemagick 
- Imagick
- PHP 7
- MAMP oder XAMPP
- Diese Pfade müssen im MAMB vorhanden sein(Imagick speichert dort die Bilder): /Applications/MAMP/htdocs/anoinsta/images/www und /Applications/MAMP/htdocs/anoinsta/images/thumb
- Wenn XAMPP benutz wird müssen Sie im `insert.php` die Variablen Pfade `$uploaddir` und `$uploaddir_resize` ändern.

## Struktur
- Ordner `dist`
Dort befindet sich das komplette Projekt wo sie nacher mit `localhost:8888/Anoinsta/dist/` aufrufen. Alle Files werden dort minified hinterlegt und die jeweiligen `.map` erstellt.

- Ordner `modules` 
Dort befinden sich alle Javascript Module, welche für das Füllen der Seite zuständig sind

- Ordner `projekt`
- - File `database.txt` Der Query für die Datenbank

- Ordner `images`
Hier speichert Imagick die Bilder
- - Ordner `www` Bilder mit hoher Auflösung
- - Ordner `thumb` Thumbnail Bilder





## Projekt ansehen

- Auf der URL :localhost:8888/Anoinsta/dist/
