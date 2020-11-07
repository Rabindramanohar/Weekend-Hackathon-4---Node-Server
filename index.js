const http = require('http');

const server = http.createServer((res, req) => {
    if(req.url === '/welcome') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Welcome to Dominos!');
        res.end();
    }
    else if(req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            });
        res.end();
    }
    else {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end();
    }
});

server.listen(8081);

