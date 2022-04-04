const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');

// get all teams
router.get('/', teamsController.getAllTeams);

module.exports = router;
