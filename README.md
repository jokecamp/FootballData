Football/Soccer Data for Everyone
============

Football/Soccer data for anyone to use. The data is INCOMPLETE but should serve as a good starting point for anyone interested. The data includes most of the premier/first division leagues in the world. The teams attributed to leagues will mostly adhere to the last year's league tables.

When using the data some cleanup will be required. Some teams might show up twice in the team league. This will happen if the team was recently in multiple leagues/cups.

Data is in **CSV** format.

Available Data/Schema:
- Leagues @ [Leagues.csv](https://github.com/jokecamp/FootballData/blob/master/Leagues.csv)
   - Name (full name)
   - Code (5-6 alphanumeric abbreviation)
- Teams @ [Teams.csv](https://github.com/jokecamp/FootballData/blob/master/Teams.csv)
 - Name (full team name)
 - League (League Code) that team has recently been involved in

### Country specific data ###
- England
 - Players
  - English Premier League 2013 only right now
  - Full Name - first and last
 - Games
   - A big file. Most league game results combined into one csv file.

I hope to add more data including players and score history. Feel free to send pull requests with any data sets you have. Over time I hope to normalize the data and establish proper relationships.


### Data Sources

 - [www.football-data.co.uk](http://www.football-data.co.uk/data.php)



http://en.wikipedia.org/w/api.php?action=parse&page=2010 FIFA World Cup squads&format=json
http://en.wikipedia.org/w/api.php?action=expandtemplates&page=2010 FIFA World Cup squads&format=json
http://en.wikipedia.org/w/api.php?action=parse&text={{nat fs player|no=1|pos=GK|name=[[Moeneeb Josephs]]|age={{Birth date and age2|2010|6|11|1980|5|19|df=y}}|caps=17|club=[[Orlando Pirates FC|Orlando Pirates]]|clubnat=RSA}}

http://en.wikipedia.org/w/api.php?action=par
2010 FIFA World Cup squads

?action=parse&page=2010 FIFA World Cup squads&format=json

Scrapper params:
//table[@class='sortable jquery-tablesorter']//tr
td[1]


http://en.wikipedia.org/w/api.php?format=json&action=query&titles=2010%20FIFA%20World%20Cup%20squads&prop=revisions&rvprop=content
