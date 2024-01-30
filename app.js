const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./staticAssets'))


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './index.html'));
})



app.use('*', (req, res)=>{
    res.send('home page');
})

app.listen(5001, ()=>{
    console.log("server is listening to port 5001")
})