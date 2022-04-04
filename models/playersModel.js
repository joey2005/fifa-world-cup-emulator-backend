const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/players.json');

const getAllPlayers = (teamName, callback) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
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
