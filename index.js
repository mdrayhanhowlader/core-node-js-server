const events = require('events');
const eventEmitter = new events.EventEmitter();


// creating an event handler
const handleTestEvent = () => {
    console.log('Event is running');
}

// assign the handler into an event
eventEmitter.on('scream', handleTestEvent).handleTestEvent;

// firing the event
eventEmitter.emit('scream')

































// const http = require('http');
// // const other = require('./other');
// // const user = require('./user.json');
// // const url = require('url');
// const fs = require('fs');



// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         // fs.readFile('user.json', (err, data) => {
//         //     if(err){
//         //         res.write('failed to read data')
//         //         res.end();
//         //     }else {
//         //         res.write(data);
//         //         res.end();
//         //     }
//         // })

//     //    const data =  fs.readFileSync('user.json');
//     //    res.write(data);
//     //    res.end();

//     fs.writeFile('newData.txt', 'Hello node js', (err) => {
//         if(err) {
//             res.write('data failed to write');
//             res.end();
//         } else {
//             res.write('data written successfully');
//             res.end();
//         }
//     })

//     }
// })


// // console.log(url);
// const PORT = 5000;
// server.listen(PORT);
// console.log(`Server is running at PORT ${PORT}`)
































// // const server = http.createServer((req, res) => {
// //     const address_url = "http://localhost:5000/contact?name=fahim&country=bangladesh";
// //     const parsed_url = url.parse(address_url,true);
// //     const query_object = parsed_url.query
// //     console.log(query_object);
// // })





// // const server = http.createServer((req, res) => {
// //     if(req.url == '/'){
// //         res.writeHead(200, {'Content-Type' : 'text/html'});
// //         res.write('<p>This is Home page</p>');
// //         res.end();
// //     }
// //     else if(req.url == '/contact'){
// //         res.writeHead(200, {'Content-Type' : 'text/html'});
// //         res.write('<p>This is Contact page</p>');
// //         res.end();
// //     }
// //     else if(req.url == '/about'){
// //         res.writeHead(200, {'Content-Type' : 'application/json'});
// //         res.write(JSON.stringify(user));
// //         res.end();
// //     }
// // })