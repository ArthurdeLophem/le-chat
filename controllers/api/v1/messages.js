const { response } = require("express");
let message = []
// const Message = require('../../../models/api/v1/message');
const messages =
    [
        {
            id: 911,
            message: "pineapple belongs on pizza",
            username: "elon musk"
        },
        {
            id: 912,
            message: "pizza belongs on pineapple",
            username: "elon musk"
        },
        {
            id: 913,
            message: "pizza belongs on pizza",
            username: "elon musk"
        },
        {
            id: 914,
            message: "pineapple belongs",
            username: "elon musk"
        },
        {
            id: 915,
            message: "pineapple belongs",
            username: "pikachu"
        }
    ]

const getAll = (req, res, next) => {
    // Message.find((err, docs) => {
    //     if (!err) {
    //         res.json({
    //             "status": "success",
    //             "message": "getting messages",
    //             "data": {
    //                 "messages": docs
    //             }
    //         });
    //     }
    // });
    res.json({
        status: "success",
        message: "getting messages",
        data: {
            messages: messages
        }
    });
}

const getByUser = (req, res, next) => {
    // try {
    //     const username = req.params.username;
    //     Message.find({ username: username }, (err, docs) => {
    //         if (!err) {
    //             res.json({
    //                 "status": "success",
    //                 "message": "getting messages",
    //                 "data": {
    //                     "messages": docs
    //                 }
    //             });
    //         }
    //     })
    // } catch (error) {
    //     res.send(error)
    // }
    message = [];
    messages.forEach(element => {
        console.log(element.username, req.params.username)
        if (element.username == req.params.username) {
            message.push(element);
        }
    });
    console.log(message);
    res.json({
        status: "success",
        message: "getting messages for" + req.params.username,
        data: {
            messages: message
        }
    });
}

const getById = async (req, res, next) => {
    // try {
    //     const message = await Message.findById();
    //     res.json(message);
    // } catch (error) {
    //     res.send(error)
    // }
    message = [];
    message = messages.find(element => element.id == req.params.id);
    res.json({
        status: "success",
        message: "getting messages",
        data: {
            messages: message
        }
    });
}

const updateMessage = (req, res, next) => {
    // try {
    //     let update = { message: req.body.message };
    //     let filter = req.params.id;
    //     Message.findByIdAndUpdate(filter, update,
    //         function (err, docs) {
    //             if (err) {
    //                 res.send(err)
    //             }
    //             else {
    //                 res.send({ "updated message": docs });
    //             }
    //         });
    // } catch (error) {
    //     res.send(error)
    // }
    message = messages.find(element => element.id == req.params.id);
    message.message = "new messaged";
    res.json({
        status: "success",
        message: "succesfully updated message n°" + req.params.id,
        data: {
            messages: message
        }
    });
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