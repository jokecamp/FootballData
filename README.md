FootballData
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
- Players @ [Players-EPL.csv](https://github.com/jokecamp/FootballData/blob/master/Players-EPL.csv)
 - English Premier League 2013 only right now
 - Full Name - first and last

I hope to add more data including players and score history. Feel free to send pull requests with any data sets you have. Over time I hope to normalize the data and establish proper relationships.
