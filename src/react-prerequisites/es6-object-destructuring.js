const mentor = {
    name: 'Madhu',
    location: 'Stakroute'
}


// const name = mentor.name;

const { name: myVariable, location } = mentor; // destructuring the object mentor

console.log(myVariable);
console.log(location);