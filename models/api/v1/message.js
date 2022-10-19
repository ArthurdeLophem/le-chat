import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    username: String,
    message: String,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;