var express = require('express');
var router = express.Router();
var common = require('@workspace/constants');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', common: common });
});

module.exports = router;
