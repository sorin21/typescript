"use strict";
// ################ Simple Generic ################
function echo(data) {
    return data;
}
console.log(echo('Sorin'));
console.log(echo(27));
console.log(echo({ name: "Sorin", age: 27 }));
// ################ Better Generic ################
// data will be the type T
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Sorin').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Sorin", age: 27 }));
// ################ Built-in Generics ################
// type of generic(default): array
// type of array: number
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
// ################ Arrays ################
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apples", "Mangos", "Oranges"]);
// ################ Generic Types ################
// this is a type: <T>(data: T) => T
// is a generic type, then a func type
var echo2 = betterEcho;
console.log(echo2("Somenthig"));
// ################ Generic Class ################
// constraining witch types can be used in a generic class
// using T exends number | string
// T should be type number or string
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multipleValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multipleValue = 20;
console.log(simpleMath.calculate());
