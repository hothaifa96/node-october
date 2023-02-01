const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res
        .status(220)
        .send('hello from server 2')
})

app.listen(4002,()=>console.log('ready on port 4002 !!!'))