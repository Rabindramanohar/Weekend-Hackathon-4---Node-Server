var http = require("http");
const port = 8081;
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Dominos!');
        return;
    }

    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify({ a: 1 }, null, 3));
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }));
        return;
    }

    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
        return;
    }
}

httpServer.listen(port);

module.exports = httpServer;