const http = require('http');

function handler(req, res) {

    const parsedUrl = url.parse(req.url, true);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.write('Hello, I am a web server');
    res.end();
}
const server = http.createServer(handler);

server.listen(3000);