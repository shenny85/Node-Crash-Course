//Global object
console.log(global);

global.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

// Dir name and File Name
console.log(__dirname); //gives access to directory path
console.log(__filename);