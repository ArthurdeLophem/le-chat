var express = require('express');
var router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', messageController.create);

module.exports = router;
