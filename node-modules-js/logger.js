const EventEmitter = require('events')

const url = 'http://hdo.io'

class Logger extends EventEmitter {
    log(message){
        // http request to server 
    
        console.log(`${message} logged `);
    
        this.emit('message',{message})
    }
}


module.exports = Logger;
// module.exports.endPoint = url;