const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');


readStream.on('data', (chunk) => {
    console.log('.......................');
    console.log(chunk)
})

readStream.on('open', () => {
    console.log('Stream is open')
})

setTimeout(() => {
    readStream.pause(),
    console.log('streaming is pause now.')
}, 15)

setTimeout(() => {
    readStream.resume(),
    console.log('streaming is resume now.')
}, 1500)