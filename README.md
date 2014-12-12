Football/Soccer Data for Everyone
============

Football/Soccer data for anyone to use. The data is INCOMPLETE but should serve as a good starting point for anyone interested. The data includes most of the premier/first division leagues in the world. The teams attributed to leagues will mostly adhere to the last year's league tables.

When using the data some cleanup will be required. Some teams might show up twice in the team league. This will happen if the team was recently in multiple leagues/cups.

Data is in **CSV**, and **JSON** format.

**Files and datasets will move and schemas will change. Fork the project if you need a snapshot.**

Available Data/Schema:
- See [openFootballData](https://github.com/jokecamp/FootballData/tree/master/openFootballData) for OpenFootball JSON and CSV datasets
  - the most useful is probably openFootballData/games.json
- Leagues @ [Leagues.csv](https://github.com/jokecamp/FootballData/blob/master/Leagues.csv)
   - Name (full name)
   - Code (5-6 alphanumeric abbreviation)
- Teams @ [Teams.csv](https://github.com/jokecamp/FootballData/blob/master/Teams.csv)
 - Name (full team name)
 - League (League Code) that team has recently been involved in
- EPL Players in JSON in [espn](https://github.com/jokecamp/FootballData/tree/master/espn) dir
 - now that the ESPN API is retired for the public here is a cache of 2014 EPL Players

### Country specific data ###
- England
 - Players
  - English Premier League 2013 only right now
  - Full Name - first and last
 - Games
   - A big file. Most league game results combined into one csv file.

I hope to add more data including players and score history. Feel free to send pull requests with any data sets you have. Over time I hope to normalize the data and establish proper relationships.

### World Cup Data
 - Started in 1930 with 13 teams in group format
 - 1934, 1938 did not have groups. It was straight knockout style
 - The 1942 and 1946 cups were canceled.
 - Expanded to 24 teams in 1982
 - Expanded to 32 teams in 1998
 - Squad lists can be pulled from Wikipedia


### Data Sources

- [www.football-data.co.uk](http://www.football-data.co.uk/data.php)
- Wikipedia for squad lists
- <https://github.com/openfootball/>
- [ESPN API](http://developer.espn.com/blog/read/publicretirement) -> Retired

See http://jokecamp.wordpress.com/2014/03/08/guide-to-football-and-soccer-data-and-apis/ for list of soccer data repos.
