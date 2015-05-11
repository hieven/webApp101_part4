var http = require('http');
var circle = require('./circle');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello World');
}).listen(3000);

console.log('Server running at 3000');


console.log(circle.area(50));