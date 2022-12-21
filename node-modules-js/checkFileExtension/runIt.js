const CheckFile = require('./checkFile')

const check = new CheckFile();

check.on('found it', arg => console.log(`file name is ${arg.name}`) )
check.on('nah', arg => console.log(` what does the farkash say  ${arg.name}`) )


check.checkJs(__filename)
check.checkJs('C:\\Users\\IITC\\hodi\\my-app\\package-lock.json')

