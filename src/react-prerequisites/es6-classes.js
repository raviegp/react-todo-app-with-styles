// Create a Person class, define two properties, Name and Location, and create a method getGreeting.

class Person {
   constructor(name = 'Anonymous', location = 'Earth') {
       this.name = name;
       this.location = location;
   } 
   getGreeting() {
       return `Hi. My name is ${this.name}`;
   }

   getDescription() {
       return `Hi. My name is ${this.name} and I live on ${this.location}`;
   }
}

// const neelanjan = new Person('Neelanjan Sen', 'Bangalore');

class Student extends Person {
    constructor(name, location, branch) {
        super(name, location);
        this.branch = branch;
    }

    getDescription() {
        const description = super.getDescription();
        return `${description} and my branch is ${this.branch}`; 
    }
}

const neelanjan = new Student('Neelanjan', 'Bangalore', 'Computer Science');

console.log(neelanjan.getDescription());