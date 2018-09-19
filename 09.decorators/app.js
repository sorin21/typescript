"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// a decorator is a function
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log("Hello");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// ################ Factory ################
function logging(value) {
    // 
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
// ################ Advanced ################
function pritable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        logging(true),
        pritable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// ################ Method Decorator ################
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    return Project;
}());
var project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
