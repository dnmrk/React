// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

//Primitives

let age: number = 24;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More Complext types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Dean",
  age: 27,
};

// person = {
//   isEmplyee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference