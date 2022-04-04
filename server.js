const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const teamsRoutes = require('./routes/teams');

require('dotenv').config();
const { PORT } = process.env;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());

// teams route
app.use('/teams', teamsRoutes);

app.listen(PORT, () => {
  console.log(`express app listening on port ${PORT}`);
});
