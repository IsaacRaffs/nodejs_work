var http = require('http');

http.createServer(function (req, res) {
    res.end('Teste');
}).listen(8000, "127.0.0.1");

console.log('Servidor online em http://127.0.0.1:8000/');
