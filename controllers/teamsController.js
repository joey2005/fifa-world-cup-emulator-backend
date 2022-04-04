const teamsModel = require('../models/teamsModel');

const getAllTeams = (req, res) => {
  teamsModel.getAllTeams((teamsData) => {
    res.json(teamsData);
  });
};

module.exports = {
  getAllTeams
};
