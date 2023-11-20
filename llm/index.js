require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const palmRoutes = require('./routes/palm');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/palm', palmRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
