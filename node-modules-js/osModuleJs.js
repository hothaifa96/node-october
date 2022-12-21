const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`
total memory = ${totalMemory}
total memory = ${freeMemory}`)

const uptime = os.uptime();
console.log(uptime/3600)
if ( (uptime/3600/24) > 3)
    console.log('you are a serial killer man')
else
    console.log('good programer')