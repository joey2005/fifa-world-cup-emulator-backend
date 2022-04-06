const fs = require('fs');
const dataPath = 'data/players.json';

const getAllPlayers = (teamName, callback) => {
  console.log(teamName, callback);
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    const playersData = JSON.parse(data);
    if (teamName) {
      callback(playersData.filter(player => {
        return player.Country === teamName;
      }))
    } else {
      callback(playersData);
    }
  });
};

module.exports = {
  getAllPlayers
};
