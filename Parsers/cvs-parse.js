var _ = require('underscore');
var fs = require('fs');

var Converter = require("csvtojson").Converter;
var path = '../football-data.co.uk/england/games.csv';
var fileStream = fs.createReadStream(path);

var data = [];

//new converter instance
var param={};
var converter = new Converter(param);

//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function (json) {

  var outputFile = "../football-data.co.uk/england/games.json";
  fs.writeFile(outputFile, JSON.stringify(json, null, 2), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("The file was saved as " + outputFile);
    }
  });

});

//read from file
fileStream.pipe(converter);
