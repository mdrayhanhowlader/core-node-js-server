const other = require('./other');


const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type:' : 'text/html'})
    }
})

const PORT = 5000;
server.listen(PORT);
console.log(`Server is running at PORT ${PORT}`)