//import people into modules b/c we require that file
//const xyz = require('./people');

//import multiple different things using destructuring
const {people, ages} = require('./people');

//returns empty object b/c we have not yet exported the file
console.log(people, ages)
//or
//console.log(xyz.people, xyz.ages)

//import built in modules

const os = require('os')
console.log(os);
console.log(os.platform(), os.homedir())