const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    // accounts for buffer (or package of data)
    console.log(data.toString());
});

console.log('last line');  // last line is logged first even though not in order because JavaScript will continue on even though previous line is waiting for data

//writing files
fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
    console.log('file was written');  // second parameter is the text that we want to write. Replaces original hello, ninjas with Hello World
});

//if we choose a file that does not yet exist it will be created
fs.writeFile('./docs/blog2.txt', 'Hello again', () => {
    console.log('file was written');  
});


//directories
//what if I would like to create a new folder?  //asynchronous tasks it takes some time  //only run code if the folder/files do not exist
//if (fs.existsSync("folder/file you are creating ie './assets' ") )
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
})
}   else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}


//deleting files
//ensure a file exists before we actually delete it
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}