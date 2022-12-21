const Logger = require('./logger');

const logger = new Logger()



logger.on('message',arg => {
    console.log('from app');
    console.table(arg);
})


logger.log('this node thing is good');

