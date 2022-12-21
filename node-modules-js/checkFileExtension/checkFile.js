const path = require('path')
const EventEmitter = require('events')

class CheckFileJs extends EventEmitter{
    static checkJs(str){
        const file= path.parse(str)
            if(file.ext==='.js')
                this.emit('found it', {name :file.name})
            else
                this.emit('nah', {name :file.name})
        }
}

module.exports = CheckFileJs

