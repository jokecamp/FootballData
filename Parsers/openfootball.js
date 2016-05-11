var _ = require('underscore');
var fs = require('fs');
var util = require('util');

var openFootballUtil = require('./openFootballUtil');

var football = new openFootballUtil();

require('date.format.js');


var divs = [];
divs.push({ file: '1-premierleague-i', div: 'E0'});
divs.push({ file: '1-premierleague-ii', div: 'E1'})
divs.push({ file: '1-premierleague-iii', div: 'E2'})

var data = {
  country: 'en',
  title: 'Premier League',
  outputPath: '../EPL 1992 - 2015/text/',
  inputPath: '../football-data.co.uk/england/games.json',
};

// load data once
data.matches = JSON.parse(fs.readFileSync(data.inputPath, 'utf8'));

for(var year = 1992; year < 2015; year++){

  divs.forEach(function(d) {

    data.start = year.toString();
    data.end = (year + 1).toString();
    data.division = d.div;

    football.loadData(data);
    if (data.games.length > 0){
      football.createFixtues(data);
      football.createYaml(data);
    }
    else {
      console.log("skipping " + data.division + " " + data.start);
    }
  });
}
