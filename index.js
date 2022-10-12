const express = require('express');
const app = express();
const cors = require('cors');
const phons = require('./phons.json');
const port = 5000;

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Server is runing Hello Arif');
});
app.get('/phons',(req,res)=>{
 res.send(phons)
});
app.get('/phons/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const phone = phons.find(ph => ph.id === id ) || {};
    res.send(phone);
})

app.listen(port,()=>{
    console.log(`Server running port : ${port}`);
});