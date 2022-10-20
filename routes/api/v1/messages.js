var express = require('express');
var router = express.Router();
const messageController = require('../../../controllers/api/v1/messages');
const cors = require('cors');

/* GET users listing. */
router.get('/', cors(), messageController.getAll);

router.post('/', cors(), messageController.create);

router.get('/:id', cors(), messageController.getById);

router.put('/:id', cors(), messageController.updateMessage);

router.get('/user/:username', cors(), messageController.getByUser);

module.exports = router;
