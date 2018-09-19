
// ################ modules es6 ################

import calculateRectangle from './math/rectangle';
// import {PI, calculateCircumference} from "./math/circle";
// import all, simple way
import * as Circle from "./math/circle";

console.log(Circle.PI);
console.log(Circle.calculateCircumference(30));
console.log(calculateRectangle(20, 50));