// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, str) {
    const newDrivers = [];
    for (const item of arr) {
        if (item.toLowerCase() === str.toLowerCase()) {
            newDrivers.push(item)
        }
    }
    return newDrivers;
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(arr, str) {
    const newDrivers = [];
    for(const item of arr) {
        if (item[0] === str[0]) {
            newDrivers.push(item)
        }
    }
    return newDrivers;
}

console.log(fuzzyMatch(drivers, "Sally"));

const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(obj, str) {
    const newDrivers = [];
    for (const item of obj) {
        if (item.name === str) {
            newDrivers.push(item);
        }
    }
    return newDrivers;
}

console.log(matchName(drivers1, "Sally"));