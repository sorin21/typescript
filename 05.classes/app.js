"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Section 5 - Classes');
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "Guy";
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // won't work with private method
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = "Sorin";
    // still expect to get username like in parent constructor
    function Max(username) {
        var _this = 
        // super refers to the parent class
        _super.call(this, "Sorin", username) || this;
        _this.age = 31;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("sorin");
console.log(max);
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        // if we add only the getter and not the setter, too
        // the proporty in read only
        get: function () {
            return this._species;
        },
        // this value is passed automatically by typescript
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);
// Static Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumferince = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumferince(8));
// Abstract Classes 
// can't be instantiated directly
// you have always to inherit from them
// abstract class means this class should be extended
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default project";
        this.budget = 2000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Diana Project");
console.log(newProject);
// Private Constructor and Singleton
var OnlyOne = /** @class */ (function () {
    // with private force this class to me single
    // means you can't instantiate this class from outside
    function OnlyOne(name) {
        this.name = name;
    }
    // the code need it to create the instance is
    // this public static method
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            // we make an instance here so we don't need 
            // to create an instance ouside anymore
            OnlyOne.instance = new OnlyOne('The Only One!');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('The Only one');
var right = OnlyOne.getInstance();
console.log(right.name);
right.name = "Something Else";
console.log(right.name);
