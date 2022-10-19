const Message = require('../../../models/api/v1/message');

const getAll = (req, res, next) => {
    Message.find((err, docs) => {
        if (!err) {
            res.json({
                "status": "success",
                "message": "getting messages",
                "data": {
                    "messages": docs
                }
            });
        }
    });
}

const getById = async (req, res, next) => {
    try {
        const message = await Message.findById(req.params.id);
        res.json(message);
    } catch (error) {
        res.send(error)
    }
}

const create = (req, res, next) => {
    let message = new Message();
    message.username = req.body.username;
    message.message = req.body.message;
    message.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "cannot create message",
            })
        }
        if (!err) {
            res.json({
                "status": "success",
                "message": "created a new message",
                "data": {
                    "messages": doc
                },
            })
        }
    })
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;