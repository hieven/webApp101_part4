var http = require('http');

function start() {
    function onRequest(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Hello World');
        res.end();
    }
    http.createServer(onRequest).listen(3000);
    console.log('Server running at 3000');
}

exports.start = start;