const express = require('express');

const app = express();

function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {
    }
}

app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there!, I am here');
});

app.get('/fast',function(req, res) {
    res.send('This is fast file');
});

app.listen(3000,function(){
    console.log('listening');
});