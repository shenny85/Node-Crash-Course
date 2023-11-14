const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

//create a write stream from a readable stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/*readStream.on('data', (chunk) => {
    console.log('----NEW CHUNK----');
    console.log(chunk);

    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})*/

//another way to create a write stream from a readable stream
//piping
readStream.pipe(writeStream);



