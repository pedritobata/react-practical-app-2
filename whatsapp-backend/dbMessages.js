const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
    name: String,
    message: String,
    timestamp: String,
    received: Boolean
});


module.exports = mongoose.model('messagecontent', messagesSchema);