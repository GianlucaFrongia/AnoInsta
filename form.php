<!DOCTYPE html>
<html lang="de">
  <head>
      <meta charset="UTF-8">
      <meta name="viewpop5rt" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Senden - Anoinsta</title>
      <link rel="stylesheet" href="css/responsive.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <body>
      <div class="container">
        <h1>Senden - Anoinsta</h1>
        <hr>
        <form enctype="multipart/form-data" action="insert.php" method="POST">
          <div class="form-row">
            <div class="col">
              <label for="name">Name:</label>
              <input type="text" id="name" class="form-control" name="name" required maxlength="30">
            </div>
            <br>
            <div class="col">
              <label for="description">Beschreibung:</label>
              <input type="text" id="description" class="form-control" name="title" required maxlength="120">
            </div>
            <br>
            <div class="col">
              <label for="file">Datei:</label>
              <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
              <input type="file" id="file" name="file" required>
            </div>
            <br>
            <div class="col">
              <input class="form-check-input" type="checkbox" value="" id="check" required>
              <label class="form-check-label" for="check">Ich akzeptiere die Datenschutzbestimmungen.</label>
            </div>
            <br>
            <div class="col">
              <button class="btn btn-primary" id="post" type="submit">Senden!</button>
            </div>
          </div>
        </form>
      </div>
  </body>
</html>
