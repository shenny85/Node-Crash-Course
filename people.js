const people = ['yoshi', 'ryu','chum-li', 'mario'];
const ages = [20, 25, 30, 35];

console.log(people);

//to access the people file inside the modules file we must manually export the contents
module.exports = people

//how can we export multiple different things
module.exports = {
    people: people, ages
}
//or
module.exports = {
    people, ages
} 