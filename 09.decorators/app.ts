
// a decorator is a function
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log("Hello");
  }
}

// ################ Factory ################

function logging(value: boolean): any {
  // 
  return value ? logged : null;
}

@logging(true)
class Car {

}


// ################ Advanced ################

function pritable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logging(true)
@pritable
class Plant {
  name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();


// ################ Method Decorator ################

function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

class Project {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }
  
  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
}
project.calcBudget();