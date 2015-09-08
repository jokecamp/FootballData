var _ = require('underscore');
var util = require('util');
var fs = require('fs');
var mkdirp = require('mkdirp');

var getGames = function(data) {
  var yearsKey = data.start.substring(2) + '-' + data.end.substring(2);
  var items = _.filter(data.matches,
      { 'Div': data.division, 'Years': yearsKey  }
  );

  items.forEach(function(g) {
    var parts = g.Date.split('/');
    g.Date = new Date(parts[2], parts[1]-1, parts[0]);
  });

  return _.sortBy(items, function(o) { return -o.Date.dateTime; });
}

var getGamesByMatchdays =  function(data){
  var items = data.games;
  var size = Math.floor(data.teams.length/2);
  console.log(util.format("%s %s %s teams -> %s matchday size",
    data.division,
    data.start + "-"+ data.end,
    data.teams.length, size));

  var matchdays = _.groupBy(items, function(element, index){
    return Math.floor(index/size);
  });
  return matchdays;
}

var getYears = function(start, end, seperator){
  return util.format("%s%s%s", start, seperator, end.substring(2));
}

var createList = function(header, items) {
  var txt = header + ":\n";
  items.forEach(function(i) {
    txt += "- " + i + "\n";
  });
  return txt + "\n";
}

var createSeasonInfo = function(data){
  var txt = '';
  _.keys(data).forEach(function (k) {
    txt += k + ": " + data[k] + "\n";
  });
  return txt + "\n";
}

var getUniqueTeams = function(data){
  var homes = _.chain(data.games).pluck('HomeTeam').value();
  var aways = _.chain(data.games).pluck('HomeTeam').value();
  var teams = _.uniq(_.union(homes, aways)).sort();
  return teams;
}

var createHeader = function(data){
  var text = "";
  text += "############################\n";
  text += util.format("# %s %s-%s", data.title, data.start, data.end);
  text += "\n";
  text += "\n";
  return text;
}

var saveToFile = function(file, text){
  fs.writeFile(file, text, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("The file was saved as " + file);
    }
  });
}

var getFileName = function(data, ext){
  var title = (data.title.replace(" ", '') + data.division.substring(1)).toLowerCase();
  if (ext == "txt") data.files.push(title);
  return data.outputPath + data.years + '/' + title + "." + ext;
}

var createYaml = function(data){
  mkdirp(data.outputPath + data.years, function(err) {});

  var txt = createHeader(data);
  var season = {
    'league': data.country,
    'season': data.start + "/" + data.end.substring(2), //2012/13
    'start_at': data.startingDate
  };
  txt += createSeasonInfo(season);
  txt += createList('fixtures', data.files);
  txt += createList(data.teams.length + " teams", data.teams);
  saveToFile(getFileName(data, "yml"), txt);
}

var createFixtues = function(data) {
  mkdirp(data.outputPath + data.years, function(err) {});

  var text = createHeader(data);
  var matchdays = getGamesByMatchdays(data);

  _.keys(matchdays).forEach(function(d) {
    text += "Matchday " + (parseInt(d) + 1)  + "\n\n";

    var lastDate = new Date();
    matchdays[d].forEach(function(g) {

      if (lastDate.getTime() != g.Date.getTime()) {
        text += g.Date.format("[Y-m-d]") + "\n";
        lastDate = g.Date;
      }

      text += "\t";
      text += "15.00\t\t"
      text += g.HomeTeam + "\t";
      text += g.FTHG + "-" + g.FTAG + "\t";
      text += g.AwayTeam + "\n";
    });

    text += "\n";
  });
  var file = getFileName(data, "txt")
  saveToFile(file, text);
}

var loadData = function(data) {
  data.games = getGames(data);
  data.teams = getUniqueTeams(data);

  if (data.games.length > 0) {
    data.startingDate = _.min(_.pluck(data.games, 'Date')).format('Y-m-d');
  }
  data.files = [];
  data.years = util.format("%s-%s", data.start, data.end.substring(2));
  data.yearsKey = util.format("%s %s", data.start.substring(2), data.end.substring(2));
}

var openFootballUtil = function() {
  this.createYaml = createYaml;
  this.createFixtues = createFixtues;
  this.loadData = loadData;
};

module.exports = openFootballUtil;
