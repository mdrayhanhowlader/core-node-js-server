const http = require('http');
const other = require('./other');
const user = require('./user.json');



const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<p>This is Home page</p>');
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<p>This is Contact page</p>');
        res.end();
    }
    if(req.url == '/about'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.write(JSON.stringify(user));
        res.end();
    }
})

const PORT = 5000;
server.listen(PORT);
console.log(`Server is running at PORT ${PORT}`)