"use strict";
console.log('it is wroking');
// ################ strings ################
var myName = 'Max';
// myName = 28;
// array
// any makes this array to be with 
// strings or numbers
var hobbies = ["Footbal", "Cooking"];
hobbies = [100];


// ################ tuples ################
var address = ["My street", 77];


// ################ enum ################
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Red"] = 101] = "Red"; // 101
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);


// ################ functions ################
// string refers to myName
function returnMyName() {
    return myName;
}
console.log(returnMyName());


// ################ void ################
// void means this fn should 
// not return anythig
function sayHello() {
    console.log('Hello !!!');
}


// ################ argument types ################
function multipply(value1, value2) {
    return value1 * value2;
}
console.log(multipply(2, 7));


// ################ function types ################
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multipply;
console.log(myMultiply(2, 3));


// ################ objects ################
var userData = {
    name: "Max",
    age: 27
};
// userData = {}


// ################ complex object ################
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// ################ union types ################
var myRealAge = 27;
myRealAge = "27";
// myRealAge = true;


// ################ check types ################
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("Value is a number");
}


// ################ never ################
// never returns anything
function neverReturns() {
    throw new Error('An error!');
}


// ################ nullable types ################
// not allowed to assign null to types
var canBenull = 12;
canBenull = null;
// here will be type any by default
var canAlsoBeNull;
canAlsoBeNull = null;
// here is not any anymore
// will be only type null
var canThisBeAny = null;
canBenull = 22;
var canThisBeAny2 = null;
canThisBeAny2 = 22;
