"use strict";
// ################ typescript namespaces ################
/* /// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" /> */
Object.defineProperty(exports, "__esModule", { value: true });
// import CircleMath = MyMath.Circle;
var Pi = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.Circle.calculateCircumference(10));
console.log(Pi);
// ################ modules es6 ################
var circle_1 = require("./math/circle");
console.log(circle_1.PI);
console.log(circle_1.calculateCircumference(30));
