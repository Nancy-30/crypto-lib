const express = require('express');
const router = express.Router();
const {chat} = require('../controllers/palm');

router.post('/', chat);

module.exports = router;