console.log('Section 5 - Classes');

class Person {
  name: string;
  private type: string = "Guy";
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old Guy")
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // won't work with private method


// ################ Inheritance ################
class Max extends Person {
  // name = "Sorin";
  // still expect to get username like in parent constructor
  constructor(username: string) {
    // super refers to the parent class
    super("Sorin", username);
    this.age = 31;
  }
}

const max = new Max("sorin");
console.log(max);


// ################ Getters and Setters ################
class Plant {
  private _species: string = "Default";
  
  // if we add only the getter and not the setter, too
  // the proporty in read only
  get species() {
   return this._species;
  }  
  // this value is passed automatically by typescript
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);



// ################ Static Properties and Methods ################
// we can access static props and methods
// without instantiating the Helper class
class Helpers {
  static PI: number= 3.14;
  static calcCircumferince(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumferince(8));



// ################ Abstract Classes ################
// can't be instantiated directly
// you have always to inherit from them
// abstract class means this class should be extended
abstract class Project {
  projectName: string = "Default project";
  budget: number = 2000;
  
  // we don't have a function body
  // we don't implement any logic
  // abstract method means that on child we have to 
  // add a body and use it
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Diana Project");
console.log(newProject);



// ################ Private Constructor and Singleton ################
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string
  // with private force this class to me single
  // means you can't instantiate this class from outside
  private constructor(name: string) {
    this.name = name;
  }
  
  // the code need it to create the instance is
  // this public static method
  static getInstance() {
    if(!OnlyOne.instance) {
      // we make an instance here so we don't need 
      // to create an instance ouside anymore
      OnlyOne.instance = new OnlyOne('The Only One!');
    }
    return OnlyOne.instance;
  }
}

let wrong = new OnlyOne('The Only one');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = "Something Else";
console.log(right.name);
