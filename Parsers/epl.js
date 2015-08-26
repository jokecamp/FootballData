// parser.js for http://www.livegoals.com/
var _ = require('underscore');
var fs = require('fs');

var path = '../EPL 1992 - 2015/2015/';
var files = fs.readdirSync(path);

// get only epl fantasy json files
// and combine into one json array
var data = [];

_.each(files, function(f) {
  if (f.indexOf('.epl-stats.json') > 0) {
    var filename = path + f;
    console.log(filename);
    var items = JSON.parse(fs.readFileSync(filename, 'utf8'));
    console.log(items.length + " items")

    // exclude games that have not been played
    var played = _.filter(items, function(i) { return i.score != 'v'; });
    console.log(played.length + " item played")
    data = _.union(data, played);
  }
});

console.log(data.length + " total items");

var matches = _.uniq(data, function(n) {
  // these 3 fields create a unique key
  return n.date + n.home + n.away;
});

console.log(matches.length + " unique");

var fs = require('fs');
var filename = path + "../2015-results.json";
fs.writeFile(filename, JSON.stringify(matches, null, 2), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("The file was saved as " + filename);
  }
});
