var express = require('express');
var router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');

/* GET users listing. */
router.get('/', messageController.getAll);

router.post('/', messageController.create);

router.get('/:id', messageController.getById);

module.exports = router;
