var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ status: 'ok', message: 'PhotoDataBase API', version: '1.0.0' });
});

module.exports = router;
