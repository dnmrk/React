// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

//Primitives

let age: number = 24;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More Complext types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];


// Type Alias
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Dean",
  age: 27,
};

// person = {
//   isEmplyee: true,
// };

let people: Person[];

// Type inference / union types
let course: string | number = "React - The Complege Guide";

course = 1234;
