const playersModel = require('../models/playersModel');

const getAllPlayers = (req, res) => {
  playersModel.getAllPlayers(
    req.query.teamName,
    (playersData) => {
      res.json(playersData);
    }
  );
};

module.exports = {
  getAllPlayers
};
