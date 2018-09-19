// interface meas: we define a type where we make sure that 
// a certain field is available
// interfaces are a way to guarantee that certain props
// or methods are available

interface NamedPerson {
  firstName: string;
  // age prop is posible but not required, is optional
  age?: number;
  // special notation when you don't know the prop name
  // this is not an array
  [propName: string]: any;
  great(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changeName(person:  NamedPerson) {
  person.firstName = "Sorin";
}

const person: NamedPerson = {
  firstName: "Ana",
  // this is the unknown propName, wich is an array
  hobbies: ["Guitar", "Sing"],
  great(lastName: string) {
    console.log("I am " + this.firstName + " " + lastName);
  }
};

// if we pass an obj here and not a const with an obj
// typescript will stricly check each prop if was defined
// greet({firstName: 'Dan', age: 27});

changeName(person);
greet(person);
person.great("Dragomir");


class Person implements NamedPerson {
  // implements the required props and methos
  firstName: string;
  // add a new prop to class that is not in the interface
  lastName: string;
  great(lastName: string) {
    console.log("I am " + this.firstName + " " + lastName);
  }
}

const myPerson = new Person();
myPerson.firstName = "Cristina";
myPerson.lastName = "Dragomir";
greet(myPerson);
myPerson.great(myPerson.lastName)


// ################ Function Types ################

interface DoubleValueFunc {
  // define a function type
  (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
}

console.log(myDoubleFunction(10, 20));


// ################ Interface Inhereritance ################

interface AgedPerson extends NamedPerson {
  // add age to be required now
  age: number;
}

const oldPerson: AgedPerson = {
  age:27,
  firstName: "Sorinel",
  great(lastName: string) {
    console.log("Hello " + this.firstName + " " + lastName);
  }
};

console.log(oldPerson);
oldPerson.great("Dragomir");

