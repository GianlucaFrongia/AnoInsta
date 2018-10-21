npm install --save tinify

var tinify = require("tinify");
tinify.key = "5kQkHJowRfG6ZYXH3tBY3rCfObZjm1FV";

var source = tinify.fromFile("large.jpg");
var resized = source.resize({
  method: "fit",
  width: 150,
  height: 100
});
resized.toFile("thumbnail.jpg");
