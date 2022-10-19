const express = require('express');
const router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
});

module.exports = router;
