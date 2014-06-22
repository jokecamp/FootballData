import requests, json

key = "REDACTED"
url = "http://api.espn.com/v1/sports/soccer?apikey=" + key

r = requests.get(url)
json = r.json()

file = open("leagues.json", 'w')
file.write(r.text)
file.close()

print(json)

#url = "http://api.espn.com/v1/sports/soccer/eng.1/teams?apikey=" + key
#url = "http://api.espn.com/v1/sports/soccer/eng.1/teams/384?enable=roster&apikey=" + key
