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

// Functions & types

function add(a: number, b: number): string {
  return a + b;
}

function print(value: any) {
  console.log(value);
  //return type void
}

// Generics TypeSave yet flexible
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");

updatedArray[0].split(""); 

stringArray[0].split("");
