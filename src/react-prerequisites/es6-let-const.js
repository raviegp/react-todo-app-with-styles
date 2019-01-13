/**
 * 1. var can be Redeclared, Reassigned.
 * 2. let can be Reassigned but not Redeclared.
 * 3. const can't be Reassigned and Redeclared. 
 * 
 * 4. All three, var, let and const are function scoped.
 * 
 * 5. Var is Function Scoped, but let and const are both Function scoped as well as Block scoped.
 */

// var name = 'Neelanjan';
// var name = 'Neel';
// console.log(`Hello ${name}`);

// function getName() {
//     const name = 'Neelanjan Sen';
//     return name;
// }

// console.log(getName());

// console.log(`Hello ${name}`);

// const fullName = 'Neelanjan Sen';

// if (fullName) {
//     var firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);