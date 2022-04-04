const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/teams.json');

const getAllTeams = (callback) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    const teamsData = JSON.parse(data);
    callback(teamsData);
  });
};

module.exports = {
  getAllTeams
};
