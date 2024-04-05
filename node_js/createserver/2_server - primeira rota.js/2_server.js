const express = require('express');
const app = express()

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(8000, function(req, res){
    console.log('Servidor online em http://127.0.0.1:8000/');
});

