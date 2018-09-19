"use strict";
/*

Let's keep it simple and only add the following methods to the Map:

// should create a new key-value pair
setItem(key: string, item: T)

// should retrieve the value of the provided key
getItem(key: string)

// should remove all key-value pairs
clear()

// should output key-value pairs
printMap()

//The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();

*/
var MyMap = /** @class */ (function () {
    function MyMap() {
        // [key: string]
        // special notation when u don't know the key name
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        // overwrite any existing item with that key
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
// only numbers can be stored in this map
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
