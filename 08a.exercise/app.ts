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

class MyMap<T> {
  // [key: string]
  // special notation when u don't know the key name
  private map: {[key: string]: T} = {};

  setItem(key: string, item: T) {
    // overwrite any existing item with that key
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {};
  }

  printMap() {
    for(let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

// only numbers can be stored in this map
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();