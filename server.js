const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const teamsRoutes = require('./routes/teams');
const playersRoutes = require('./routes/players');

require('dotenv').config();
const { PORT } = process.env;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());

// teams route
app.use('/teams', teamsRoutes);

// players route
app.use('/players', playersRoutes);

app.listen(PORT, () => {
  console.log(`express app listening on port ${PORT}`);
});
