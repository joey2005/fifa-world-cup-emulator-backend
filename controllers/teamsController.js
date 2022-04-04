const teamsModel = require('../models/teamsModel');

const getAllTeams = (req, res) => {
  teamsModel.getAllTeams((teamsData) => {
    res.json(teamsData);
  });
};

const changeTeamFormation = (req, res) => {
  teamsModel.changeTeamFormation(
    req.params.teamID,
    req.body.formation,
    (teamsData) => {
      res.json(teamsData);
    }
  );
};

module.exports = {
  getAllTeams,
  changeTeamFormation
};
