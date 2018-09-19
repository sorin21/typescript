console.log('it is wroking');

// strings 
let myName = 'Max';
// myName = 28;

// array
// any makes this array to be with 
// strings or numbers
let hobbies: any[] = ["Footbal", "Cooking"];
hobbies = [100];

// tuples
let address: [string, number] = ["My street", 77];

// enum
enum Color {
  Gray, 
  Blue = 100,
  Red // 101
}

let myColor: Color = Color.Red;
console.log(myColor);

//functions
// string refers to myName
function returnMyName():string {
  return myName
}

console.log(returnMyName());

// void
// void means this fn should 
// not return anythig
function sayHello():void {
  console.log('Hello !!!');
}

// argument types
function multipply(value1:number, value2:number): number {
  return value1 * value2;
}
console.log(multipply(2, 7));


// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multipply;
console.log(myMultiply(2,3));


// objects
let userData: {name: string, age: number} = {
  name: "Max",
  age: 27
};

// userData = {}

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}
// complex = {}


// type alias
// type tell typescript to create a new type
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}

// union types
let myRealAge: number | string = 27;
myRealAge = "27";
// myRealAge = true;

// check types
let finalValue = "A string";
if(typeof finalValue == "number") {
  console.log("Value is a number");
}

// never 
// never returns anything
function neverReturns(): never {
  throw new Error('An error!');
}

// nullable types
// not allowed to assign null to types
let canBenull: number | null = 12;
canBenull = null;

// here will be type any by default
let canAlsoBeNull;
canAlsoBeNull = null;

// here is not any anymore
// will be only type null
let canThisBeAny = null;
canBenull = 22;

let canThisBeAny2: any = null;
canThisBeAny2 = 22;

