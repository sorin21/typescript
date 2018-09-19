// ################ Simple Generic ################

function echo(data: any) {
  return data;
}

console.log(echo('Sorin'));
console.log(echo(27));
console.log(echo({name: "Sorin", age: 27}));


// ################ Better Generic ################

// data will be the type T
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Sorin').length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Sorin", age: 27}));

// ################ Built-in Generics ################
// type of generic(default): array
// type of array: number
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);


// ################ Arrays ################

function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
printAll<string>(["Apples", "Mangos", "Oranges"]);


// ################ Generic Types ################

// this is a type: <T>(data: T) => T
// is a generic type, then a func type
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Somenthig"));


// ################ Generic Class ################

// constraining witch types can be used in a generic class
// using T exends number | string
// T should be type number or string
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multipleValue: U;
  calculate(): number {
    return +this.baseValue * +this.multipleValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multipleValue = 20;
console.log(simpleMath.calculate());