let http = require('http');

const server = http.createServer( function(req, res){
    res.writeHead(200, {'Context-type' : 'text/html'});
    res.end('Hello Jay');
} );
server.listen(8080);