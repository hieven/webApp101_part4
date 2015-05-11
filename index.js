var http = require('http');
var circle = require('./circle');
var events = require('events').EventEmitter;

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello World');
}).listen(3000);

console.log('Server running at 3000');


console.log(circle.area(50));

var ee = new events();
ee.items = [1, 2, 3, 4];
ee.on('haha', function() {
    console.log('changed');
})