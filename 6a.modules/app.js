// ################ modules es6 ################
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "./math/rectangle", "./math/circle"], function (require, exports, rectangle_1, Circle) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    rectangle_1 = __importDefault(rectangle_1);
    Circle = __importStar(Circle);
    console.log(Circle.PI);
    console.log(Circle.calculateCircumference(30));
    console.log(rectangle_1.default(20, 50));
});
