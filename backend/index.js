const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

const db = require('./config/mongoose');

app.use('/', require('./routes'));

// -------- Start the server -------- //

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

