const jwt = require('jsonwebtoken');

function auth(req,res,next) {
    const token = req.headers['x-auth-token'];
    if(!token)
        return res.status(400).send('no token povided');
    
    if(!jwt.verify(token,'Xmen'))
        return res.status(401).send('invalid token');
    next()
}

module.exports=auth