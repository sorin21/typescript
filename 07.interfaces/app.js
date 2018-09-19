"use strict";
// interface meas: we define a type where we make sure that 
// a certain field is available
// interfaces are a way to guarantee that certain props
// or methods are available
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Sorin";
}
var person = {
    firstName: "Ana",
    // this is the unknown propName, wich is an array
    hobbies: ["Guitar", "Sing"],
    great: function (lastName) {
        console.log("I am " + this.firstName + " " + lastName);
    }
};
// if we pass an obj here and not a const with an obj
// typescript will stricly check each prop if was defined
// greet({firstName: 'Dan', age: 27});
changeName(person);
greet(person);
person.great("Dragomir");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.great = function (lastName) {
        console.log("I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Cristina";
myPerson.lastName = "Dragomir";
greet(myPerson);
myPerson.great(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Sorinel",
    great: function (lastName) {
        console.log("Hello " + this.firstName + " " + lastName);
    }
};
console.log(oldPerson);
oldPerson.great("Dragomir");
