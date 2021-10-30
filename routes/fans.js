const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/fans', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'fans.html'));
});

module.exports = router;
