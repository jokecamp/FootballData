# footballStats

An open database with historical data of major football leagues. Initially will cover the following

1. English Premier League
2. Spanish La Liga
3. Italian Serie A
4. German Bundesliga

# Data format
The data will be stored as JSON files and will have the following structure

    -- league
    -- matches
      -- general
      -- score
      -- benchHome
      -- benchAway
      -- teamHome
      -- teamAway
      -- goalHome
      -- goalAway
      -- subsHome
      -- subsAway
      -- foulHome
      -- foulAway

The individual nodes are as described below

* league ***This is the name of the league and the year for which the data exists***
* matches ***Contains data for all the matches in that particular league and year***

For the matches node we have further nodes as described below

* general ***Contains general information about the match and includes the following fields***
 * **date** *(Date on which the match took place)*
 * **time** *(Local time when the match started)*
 * **referee** *(The name of the official referee)*
 * **venue** *(The venue where the match took place)*
 * **attendance** *(Number of people attending the match)*

* score ***This has information about the score and includes the following fields***
 * **home** *(The name of the home team)*
 * **away** *(The name of the away team)*
 * **homeScore** *(Goals scored by the home team)*
 * **awayScore** *(Goals scored by the away team)*

* benchHome ***Names of the players on the bench for the home team***

* benchAway ***Names of the players on the bench for the away team***

* teamHome ***Names of the starting XI for the home team***

* teamHome ***Names of the starting XI for the away team***
* goalHome ***Names of the goal scorers for the home team***
 * **name** *(Name of the player who scored the goal)*
 * **time** *(Time when the goal was scored)*
 * **desc** *(Description to indicate the type of goal that was scored)*

* goalAway ***Names of the goal scorers for the away team***
 * **name** *(Name of the player who scored the goal)*
 * **time** *(Time when the goal was scored)*
 * **desc** *(Description to indicate the type of goal that was scored)*

* subsHome ***The substitutions for the home team***
 * **on** *(Name of the player who came on)*
 * **off** *(Name of the player who was taken off)*
 * **time** *(Time when the substitution took place)*

* subsAway ***The substitutions for the away team***
 * **on** *(Name of the player who came on)*
 * **off** *(Name of the player who was taken off)*
 * **time** *(Time when the substitution took place)*

* foulHome ***Cards received by the home team***
 * **name** *(Name of the player who received the card)*
 * **card** *(Type of card either Red or Yellow)*
 * **type** *(The reason for receiving the said card)*
 * **time** *(Time when the player received the card)*

* foulAway ***Cards received by the away team***
 * **name** *(Name of the player who received the card)*
 * **card** *(Type of card either Red or Yellow)*
 * **type** *(The reason for receiving the said card)*
 * **time** *(Time when the player received the card)*

# Corrections
A lot of data for fouls has card given at time 0, given below are the statistics for incorrect data

* Premier League 1992 to 1993
 * There are 547 mistakes in English Premier League 1992-1993
 * There are 544 foul mistakes in English Premier League 1992-1993
 * There are 3 substitution mistakes in English Premier League 1992-1993

* Premier League 1993 to 1994
 * There are 653 mistakes in English Premier League 1993-1994
 * There are 652 foul mistakes in English Premier League 1993-1994
 * There is 1 substitution mistake in English Premier League 1993-1994

* Premier League 1994 to 1995
 * There are 1251 mistakes in English Premier League 1994-1995
 * There are 1248 foul mistakes in English Premier League 1994-1995
 * There are 3 substitution mistakes in English Premier League 1994-1995
