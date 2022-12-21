const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.on('stop',(arg)=>{

    console.log('stopping . . . ',arg.seconds)
})


const date = new Date()
const seconds = date.getSeconds();
if(Math.floor(seconds/10) %2 == 0  )
    emitter.emit('stop',{seconds});

