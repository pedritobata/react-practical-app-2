const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
    name: String,
    message: String,
    timestamp: String,
    received: Boolean,
   /*  _id: {
        required: false
    } */
});


module.exports = mongoose.model('messagecontent', messagesSchema);