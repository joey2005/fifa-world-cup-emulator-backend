const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');

// get all teams
router.get('/', teamsController.getAllTeams);

// change formation for a team
router.put('/:teamID', teamsController.changeTeamFormation);

module.exports = router;
