const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/teams.json');

const getAllTeams = (callback) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    const teamsData = JSON.parse(data);
    callback(teamsData);
  });
};

const changeTeamFormation = (teamID, newFormation, callback) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    const teamsData = JSON.parse(data);
    const newTeamsData = teamsData.map(team => {
      if (team.teamID === teamID) {
        const newTeam = {...team};
        newTeam.formation = newFormation;
        return newTeam;
      } else {
        return team;
      }
    });
    fs.writeFile(dataPath, JSON.stringify(newTeamsData), (err) => {
      if (err) {
        console.log(err);
      } else {
        callback(newTeamsData);
      }
    })
  });
};

module.exports = {
  getAllTeams,
  changeTeamFormation
};
