# artifactrating

A artifact rating api works on cloudflare workers 

## Disclaimer: 
*This rating system is for entertainment purposes only and should not be taken seriously as a measure of the actual performance of artifacts in the game. The rating system only accounts for single character combat and does not consider the following factors that can affect the outcome of real combat scenarios:*

1. Distance: The rating system assumes that all characters are in melee range of each other, which may not be the case in actual gameplay. Some characters may have an advantage or disadvantage depending on how far they are from their enemies.
2. Rotation: The rating system does not account for the order and timing of skill casting by different characters, which can have a significant impact on their damage output, survivability, and utility. Some characters may have synergies or conflicts with each other depending on their skill rotations.
3. Buffs: The rating system does not account for any additional buffs that can be applied by teammates or other external sources, such as food items, environmental effects, etc, with the exception of elemental resonance. These buffs can enhance or diminish the effectiveness of certain artifacts or characters.

Therefore, this rating system should not be used as a definitive guide for choosing artifacts or building teams. It is merely a fun way to compare different artifact combinations and see how they affect a single character's combat potential. Please use your own judgment and experience when playing the game and enjoy it to the fullest!

## Artifact API Usage Guide
This guide provides information on how to use the Artifact API. Below, you will find details on the parameters required for making API calls. It also provides instructions on how to use the Artifact API, which helps you analyze and compare the stats of artifacts in the game.

### parameter details
cid: Character ID (the same in-game or provided by the Enka Network).

`fstar, pstar, sstar, gstar, cstar`: Star rank of the artifact (Flower, Plume, Sands, Goblet, and Circlet).

`flv, plv, slv, glv, clv`: Level of the artifact (Flower, Plume, Sands, Goblet, and Circlet).

`artifact3mainstatcat`: Main category of Sands artifact:
1. HP%
2. ATK%
3. DEF%
4. Elemental Mastery (EM)
5. Energy Recharge (ER)

artifact4mainstatcat: Main category of Goblet artifact:
1. HP%
2. ATK%
3. DEF%
4. EM
5. Physical Damage
6. Pyro Damage
7. Hydro Damage
8. Cryo Damage
9. Electro Damage
10. Anemo Damage
11. Geo Damage
12. Dendro Damage

artifact5mainstatcat: main category of circlet
1. HP%
2. ATK%
3. DEF%
4. EM
5. Critical Rate
6. Critical Damage
7. Healing Bonus

### API Endpoint
`https://[your-workers-ip]/`

### Character
| Name         | Description                      | Example           |
|--------------|----------------------------------|-------------------|
| `cid`        | Character ID (in-game or from Enka Network) | `cid=10000058` |

### Artifact Parameters
| Name         | Description                      | Example           |
|--------------|----------------------------------|-------------------|
| `[x]star`    | Star rank of artifact (x = f, p, s, g, c) | `fstar=5` |
| `[x]lv`      | Level of artifact (x = f, p, s, g, c)    | `flv=20`   |

### Main Stat Categories
| Name                    | Description                                        | Example                       |
|-------------------------|----------------------------------------------------|-------------------------------|
| `artifact3mainstatcat`  | Main stat category of the Sands artifact           | `artifact3mainstatcat=2`      |
| `artifact4mainstatcat`  | Main stat category of the Goblet artifact          | `artifact4mainstatcat=9`      |
| `artifact5mainstatcat`  | Main stat category of the Circlet artifact         | `artifact5mainstatcat=5`      |

### Substats
| Name         | Description                      | Example           |
|--------------|----------------------------------|-------------------|
| `stat[x]atkpercent` | ATK percentage substat of artifact (x = 1 to 5) | `stat1atkpercent=9.9` |
| `stat[x]hppercent` | HP percentage substat of artifact (x = 1 to 5) | `stat1hppercent=4.7` |
| `stat[x]defpercent` | DEF percentage substat of artifact (x = 1 to 5) | `stat1defpercent=0.0` |
| `stat[x]EM` | Elemental Mastery substat of artifact (x = 1 to 5) | `stat1EM=0` |
| `stat[x]ERpercent` | Energy Recharge percentage substat of artifact (x = 1 to 5) | `stat1ERpercent=0.0` |
| `stat[x]CRpercent` | Critical Rate percentage substat of artifact (x = 1 to 5) | `stat1CRpercent=13.2` |
| `stat[x]CDpercent` | Critical Damage percentage substat of artifact (x = 1 to 5) | `stat1CDpercent=5.4` |
| `stat[x]atk` | Flat ATK substat of artifact (x = 1 to 5) | `stat1atk=0` |
| `stat[x]hp` | Flat HP substat of artifact (x = 1 to 5) | `stat1hp=0` |
| `stat[x]def` | Flat DEF substat of artifact (x = 1 to 5) | `stat1def=0` |

### Example API Call
An example API call is provided here, but you can replace the values with your own data to customize your request.
Replace `[your workers ip]` with the actual worker's IP address:
```
https://[your workers ip]/?cid=10000058&fstar=5&flv=20&stat1atkpercent=9.9&stat1hppercent=4.7&stat1defpercent=0.0&stat1EM=0&stat1ERpercent=0.0&stat1CRpercent=13.2&stat1CDpercent=5.4&stat1atk=0&stat1hp=0&stat1def=0&pstar=5&plv=20&stat2atkpercent=4.1&stat2hppercent=0.0&stat2defpercent=0.0&stat2EM=0&stat2ERpercent=0.0&stat2CRpercent=9.7&stat2CDpercent=21.8&stat2atk=0&stat2hp=239&stat2def=0&sstar=5&slv=20&artifact3mainstatcat=2&stat3atkpercent=0.0&stat3hppercent=0.0&stat3defpercent=0.0&stat3EM=35&stat3ERpercent=0.0&stat3CRpercent=12.4&stat3CDpercent=14.8&stat3atk=0&stat3hp=239&stat3def=0&gstar=5&glv=20&artifact4mainstatcat=9&stat4atkpercent=0.0&stat4hppercent=0.0&stat4defpercent=6.6&stat4EM=0&stat4ERpercent=0.0&stat4CRpercent=6.6&stat4CDpercent=21.8&stat4atk=33&stat4hp=0&stat4def=0&cstar=5&clv=20&artifact5mainstatcat=5&stat5atkpercent=5.3&stat5hppercent=0.0&stat5defpercent=0.0&stat5EM=40&stat5ERpercent=0.0&stat5CRpercent=0.0&stat5CDpercent=28.0&stat5atk=0&stat5hp=239&stat5def=0
```