`superlig.json` includes all fixture results for the **2016-2017 Turkish Super Lig** season.

`Hafta` means `Week` in Turkish which you will see in the `week` property.

## Example

There are 9 matches for every week. The example is just one match, in which `ADANASPOR A.Ş.` were beaten by `BURSASPOR` `1 - 2`.

```json
    {
        "week": "1.Hafta",
        "matches": [
            {
                "homeTeam": {
                    "name": "ADANASPOR A.Ş."
                },
                "awayTeam": {
                    "name": "BURSASPOR"
                },
                "match": {
                    "score": "1 - 2"
                }
            }
       ]
    }
```

## Notes

- All data is taken from Turkish Football Association website ([tff.org.tr](http://www.tff.org.tr))
- `A.Ş.` means `Incorporated Company` which can be dismissed when saving the team name to your DB.
- You'll see both `ALANYASPOR` and `AYTEMİZ ALANYASPOR`. `Alanyaspor` later on took on a sponsor and became `Aytemiz Alanyaspor` in that season if you care about it. There's no harm in keeping the team name `Alanyaspor` though.

## TODO

- Match dates
- Match times
- Stadiums
- Match rosters
- Match events (Player changes)
- Match events (Goals)
- Match events (Red and yellow cards)

## Contact

E-mail me at ilker.mutlu@gmail.com if you would like to contribute or discuss how this can be improved.
