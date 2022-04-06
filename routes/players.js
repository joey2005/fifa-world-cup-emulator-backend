const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

// get all players
router.get('/', playersController.getAllPlayers);

module.exports = router;
