const mongoose = require('mongoose');

const Message = new mongoose.model('messages', new mongoose.Schema({
    to:{type : mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    from:{type : mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    content:{ type : String}
}))
 
exports.message = Message;