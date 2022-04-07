# FIFA World Cup Emulator Back-End API

This project was bootstrapped with [Node.js](https://nodejs.org/en/)

## Available Scripts

To start with this project, you should first run following command in the project directory to install all necessary dependencies:

```bash
npm install
```

After the installation, in the project directory, you can run:

```bash
npm start
```

Runs the server.

## Documetation

### Overview

* The url for the API is http://localhost:56789

### Routes

#### GET /teams

* Return an array of teams objects

* Response body example:

```json
[
  {
    "teamID": "51",
    "teamName": "Qatar",
    "country_flag": "https://yans-capstone-backend.herokuapp.com//country_flags/Flag_of_Qatar.svg",
    "qualified": "true",
    "group": "A",
    "position": "1",
    "coach": "Felix Sanchez",
    "record": "TBD",
    "formation": "4-3-3"
  }
]
```

- - - -

#### GET /players

* Return an array of players objects

* Response body example:

```json
[
  {
    "id": "4c5f6961-c694-488f-9d61-2fce9c549b6a",
    "No": "1",
    "Pos": "GK",
    "Player": "Saad Al Sheeb",
    "Date-of-Birth": "19 February 1990 (age 32)",
    "Caps": "76",
    "Goals": "0",
    "Club": "Qatar Al-Sadd",
    "Country": "Qatar",
    "Captain": "0"
  },
]
```

- - - -

#### GET /players?team=teamName

* Return an array of players objects that belong to the given national team
* teamName must be swapped out with the actual team name as found in the list of teams

- - - -

#### PUT /teams/:teamID

* Change the formation of the given team
* :teamID must be swapped out with numeric id of a team as found in the list of teams
* Put body example
```json
{
  "formation": "3-6-1"
}
```

* Response body example

```json
[
  {
    "teamID": "51",
    "teamName": "Qatar",
    "country_flag": "https://yans-capstone-backend.herokuapp.com//country_flags/Flag_of_Qatar.svg",
    "qualified": "true",
    "group": "A",
    "position": "1",
    "coach": "Felix Sanchez",
    "record": "TBD",
    "formation": "3-6-1"
  }
]
```

