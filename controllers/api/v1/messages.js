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

const getByUser = (req, res, next) => {
    try {
        const username = req.params.username;
        Message.find({ username: username }, (err, docs) => {
            if (!err) {
                res.json({
                    "status": "success",
                    "message": "getting messages",
                    "data": {
                        "messages": docs
                    }
                });
            }
        })
    } catch (error) {
        res.send(error)
    }

}

const getById = async (req, res, next) => {
    try {
        const message = await Message.findById(req.params.id);
        res.json(message);
    } catch (error) {
        res.send(error)
    }
}

const updateMessage = (req, res, next) => {
    try {
        let update = { message: req.body.message };
        let filter = req.params.id;
        Message.findByIdAndUpdate(filter, update,
            function (err, docs) {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ "updated message": docs });
                }
            });
    } catch (error) {
        res.send(error)
    }
}

const deleteMessage = (req, res, next) => {
    try {
        Message.deleteOne({ _id: req.params.id }, (err, docs) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send("deleted message n° " + req.params.id + " succesfully");
            }
        })
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
module.exports.getByUser = getByUser;
module.exports.getById = getById;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.create = create;